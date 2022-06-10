import { Context } from '@nuxt/types'
import axios from 'axios'

axios.defaults.baseURL = process.env.API_BASE_URL

export const httpGet = async (uri: string, params: object) => {
  return await axios.get(uri, params).catch((e) => {
    if(!e.response) {
      console.log(e.message)
    }
    throw e
  })
}

export const httpPost = async (url: string, params: object) => {
  return await axios.post(url, params).catch((e) => {
    if(!e.response) {
      console.log(e.message)
    }
    throw e
  })
}

export default (context: Context, inject: Function) => {
  inject('httpGet', httpGet)
  inject('httpPost', httpPost)
}
