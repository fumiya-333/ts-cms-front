import { Context } from "@nuxt/types"

const getNow = () => {
  return new Date()
}

const getYear = () => {
  return (new Date()).getFullYear()
}

export default (context: Context, inject: Function) => {
  inject('getNow', getNow)
  inject('getYear', getYear)
}