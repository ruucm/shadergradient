require('dotenv').config()

const Stripe = require('stripe')
const { createClient } = require('@supabase/supabase-js')
const { toDateTime } = require('../utils')

console.log(
  'process.env.PUBLIC_SUPABASE_URL (supabase-admin)',
  process.env.PUBLIC_SUPABASE_URL
)

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY_LIVE ?? process.env.STRIPE_SECRET_KEY ?? '',
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2022-11-15',
  }
)
const supabaseAdmin = createClient(
  process.env.PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

const upsertProductRecord = async (product) => {
  const productData = {
    id: product.id,
    active: product.active,
    name: product.name,
    description: product.description ?? undefined,
    image: product.images?.[0] ?? null,
    metadata: product.metadata,
  }

  const { error } = await supabaseAdmin.from('products').upsert([productData])
  if (error) throw error

  console.log(`Product inserted/updated: ${product.id}`)
}

const upsertPriceRecord = async (price) => {
  const priceData = {
    id: price.id,
    product_id: typeof price.product === 'string' ? price.product : '',
    active: price.active,
    currency: price.currency,
    description: price.nickname ?? undefined,
    type: price.type,
    unit_amount: price.unit_amount ?? undefined,
    interval: price.recurring?.interval,
    interval_count: price.recurring?.interval_count,
    trial_period_days: price.recurring?.trial_period_days,
    metadata: price.metadata,
  }

  const { error } = await supabaseAdmin.from('prices').upsert([priceData])
  if (error) throw error
  console.log(`Price inserted/updated: ${price.id}`)
}

const createOrRetrieveCustomer = async ({ email, uuid }) => {
  const { data, error } = await supabaseAdmin
    .from('customers')
    .select('stripe_customer_id')
    .eq('id', uuid)
    .single()

  console.log('createOrRetrieveCustomer')
  console.log({ data, error })
  if (error || !data?.stripe_customer_id) {
    // No customer record found, let's create one.
    const customerData = {
      metadata: {
        supabaseUUID: uuid,
      },
    }
    if (email) customerData.email = email
    const customer = await stripe.customers.create(customerData)
    // Now insert the customer ID into our Supabase mapping table.
    const { error: supabaseError } = await supabaseAdmin
      .from('customers')
      .insert([{ id: uuid, stripe_customer_id: customer.id }])

    console.log('supabaseError', supabaseError)
    if (supabaseError) throw supabaseError
    console.log(`New customer created and inserted for ${uuid}.`)
    return customer.id
  }
  return data.stripe_customer_id
}

const manageSubscriptionStatusChange = async (
  subscriptionId,
  customerId,
  createAction = false,
  client_reference_id = '',
  customer_details = {}
) => {
  console.log('customerId', customerId)
  // Get customer's UUID from mapping table.
  let uuid = ''
  if (client_reference_id) {
    const { data, error: noFigmaUserError } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('figma_user_id', client_reference_id)
      .single()
    if (noFigmaUserError) throw noFigmaUserError

    uuid = data.id
  } else if (customerId) {
    const { data, error: noCustomerError } = await supabaseAdmin
      .from('customers')
      .select('id')
      .eq('stripe_customer_id', customerId)
      .single()
    if (noCustomerError) throw noCustomerError

    uuid = data.id
  }

  console.log('uuid', uuid)

  // Upsert customers data
  const { error: insertCustomerError } = await supabaseAdmin
    .from('customers')
    .upsert([{ id: uuid, stripe_customer_id: customerId }])
  if (insertCustomerError) throw insertCustomerError

  const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ['default_payment_method'],
  })
  console.log('subscription - manageSubscriptionStatusChange', subscription)
  // Upsert the latest status of the subscription object.
  const subscriptionData = {
    id: subscription.id,
    user_id: uuid,
    metadata: subscription.metadata,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
    //TODO check quantity on subscription
    // @ts-ignore
    quantity: subscription.quantity,
    cancel_at_period_end: subscription.cancel_at_period_end,
    cancel_at: subscription.cancel_at
      ? toDateTime(subscription.cancel_at).toISOString()
      : null,
    canceled_at: subscription.canceled_at
      ? toDateTime(subscription.canceled_at).toISOString()
      : null,
    current_period_start: toDateTime(
      subscription.current_period_start
    ).toISOString(),
    current_period_end: toDateTime(
      subscription.current_period_end
    ).toISOString(),
    created: toDateTime(subscription.created).toISOString(),
    ended_at: subscription.ended_at
      ? toDateTime(subscription.ended_at).toISOString()
      : null,
    trial_start: subscription.trial_start
      ? toDateTime(subscription.trial_start).toISOString()
      : null,
    trial_end: subscription.trial_end
      ? toDateTime(subscription.trial_end).toISOString()
      : null,
  }

  const { error } = await supabaseAdmin
    .from('subscriptions')
    .upsert([subscriptionData])
  if (error) throw error
  console.log(
    `Inserted/updated subscription [${subscription.id}] for user [${uuid}]`
  )

  console.log({ createAction, uuid })
  console.log(
    'subscription.default_payment_method',
    subscription.default_payment_method
  )

  // For a new subscription copy the billing details to the customer object.
  // NOTE: This is a costly operation and should happen at the very end.
  if (createAction && subscription.default_payment_method && uuid)
    //@ts-ignore
    await copyBillingDetailsToCustomer(
      uuid,
      subscription.default_payment_method,
      customer_details
    )
}

/**
 * Copies the billing details from the payment method to the customer object.
 */
const copyBillingDetailsToCustomer = async (
  uuid,
  payment_method,
  customer_details
) => {
  console.log('copyBillingDetailsToCustomer!')
  const customer = payment_method.customer
  console.log('payment_method - copyBillingDetailsToCustomer', payment_method)
  console.log('customer - copyBillingDetailsToCustomer', customer)
  const { name, address } = payment_method.billing_details
  console.log({ name, address })
  if (!name || !address) return
  //@ts-ignore
  await stripe.customers.update(customer, { name, address })
  console.log('stripe.customers.update')
  const { error } = await supabaseAdmin
    .from('users')
    .update({
      email: customer_details.email,
      billing_address: { ...address },
      payment_method: { ...payment_method[payment_method.type] },
    })
    .eq('id', uuid)

  console.log('error (users update)', error)
  if (error) throw error
}

module.exports = {
  stripe,
  upsertProductRecord,
  upsertPriceRecord,
  createOrRetrieveCustomer,
  manageSubscriptionStatusChange,
}
