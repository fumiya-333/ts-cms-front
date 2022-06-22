import { Context } from '@nuxt/types'

export const getNow = () => {
  return new Date()
}

export const getYear = () => {
  return new Date().getFullYear()
}

export const addHours = (date: Date, addHours: number) => {
  date.setHours(date.getHours() + addHours)
}

export const getAddHoursNow = (hours: number) => {
  const date = getNow()
  addHours(date, hours)
  return date
}

export default (_context: Context, inject: Function) => {
  inject('getNow', getNow)
  inject('getYear', getYear)
  inject('addHours', addHours)
  inject('getAddHoursNow', getAddHoursNow)
}
