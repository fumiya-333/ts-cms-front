const getTitle = () => {
  return "TS-CMS"
}

export default ({}, inject: Function) => {
  inject('getTitle', getTitle)
}
