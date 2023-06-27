const {
  stripe,
  upsertProductRecord,
  upsertPriceRecord,
  createOrRetrieveCustomer,
  manageSubscriptionStatusChange,
} = require('./supabase-admin')

async function buffer(readable) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}
const relevantEvents = new Set([
  'product.created',
  'product.updated',
  'price.created',
  'price.updated',
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
])

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']
    const webhookSecret =
      process.env.STRIPE_WEBHOOK_SECRET_LIVE ??
      process.env.STRIPE_WEBHOOK_SECRET

    let event
    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret)
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`)
      res.writeHead(400, { 'Content-Type': 'text/plain' })
      res.end(`Webhook Error: ${err.message}`)
    }

    console.log('event.type', event.type)

    if (relevantEvents.has(event.type)) {
      try {
        switch (event.type) {
          case 'product.created':
          case 'product.updated':
            await upsertProductRecord(event.data.object)
            break
          case 'price.created':
          case 'price.updated':
            await upsertPriceRecord(event.data.object)
            break

          case 'customer.subscription.created':
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
            const subscription = event.data.object
            console.log(
              'subscription - customer.subscription.[created/updated/deleted]',
              subscription
            )

            await manageSubscriptionStatusChange(
              subscription.id,
              subscription.customer,
              event.type === 'customer.subscription.created'
            )
            // TODO: might need to redploy site after subscription status change
            // or some subscription expired users have a problem to preview site with request cookies.
            break
          case 'checkout.session.completed':
            const checkoutSession = event.data.object
            console.log('checkoutSession', checkoutSession)
            if (checkoutSession.mode === 'subscription') {
              const subscriptionId = checkoutSession.subscription
              await manageSubscriptionStatusChange(
                subscriptionId,
                checkoutSession.customer,
                true,
                checkoutSession.client_reference_id
              )
            }

            break
          default:
            throw new Error('Unhandled relevant event!')
        }
      } catch (error) {
        console.log('webhook error', error)
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.end('Webhook error: "Webhook handler failed. View logs."')
        return
      }
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ received: true }))
  } else {
    res.setHeader('Allow', 'POST')
    res.writeHead(405, { 'Content-Type': 'text/plain' })
    res.end('Method Not Allowed')
  }
}

module.exports = handler
