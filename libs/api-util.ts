import { Context } from '@nuxt/types'
import axios from 'axios'

const httpGet = async (uri: string, params: object) => {
  return await axios.get(uri, params).catch((e) => {
    if(!e.response) {
      console.log(e.message)
    }
    throw e
  })
}

const httpPost = async (url: string, params: object) => {
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
