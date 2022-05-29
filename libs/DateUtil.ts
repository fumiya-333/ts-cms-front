const getNow = () => {
  return new Date()
}

const getYear = () => {
  return (new Date()).getFullYear()
}

export default ({}, inject: Function) => {
  inject('getNow', getNow)
  inject('getYear', getYear)
}
