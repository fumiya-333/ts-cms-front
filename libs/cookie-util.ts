import { Context } from '@nuxt/types'

export const isCookie = () => {
  return navigator.cookieEnabled
}

export const setCookie = (key: string, value: string, now: Date | null) => {
  document.cookie = !now ? `${key}=${value};` : `${key}=${value}; expires=${now.toUTCString()}`
}

export default (_context: Context, inject: Function) => {
  inject('isCookie', isCookie)
  inject('setCookie', setCookie)
}
