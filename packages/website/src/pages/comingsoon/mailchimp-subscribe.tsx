import jsonp from 'jsonp-promise'
import toQueryString from 'to-querystring'
import { MAILCHIMP_FORM } from '@/consts'

export const mailchimpSubscribe = async (values) => {
  try {
    const params = toQueryString({
      EMAIL: values.email,
    })
    const url = getAjaxUrl(MAILCHIMP_FORM) + '&' + params
    const data = await jsonp(url, { param: 'c' }).promise
    console.log('data', data)
    return data
  } catch (error) {
    console.error('error - mailchimpSubscribe', error)
  }
}

function getAjaxUrl(url) {
  return url.replace('/post?', '/post-json?')
}
