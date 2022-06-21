import { Context } from '@nuxt/types'

const option = {
  enableHighAccuracy: false,
  timeout: 100,
  maximumAge: 100,
}

export const isGeolocation = () => {
  return navigator.geolocation
}

export const getCurrentPosition = async (
  currentPositionSuccess: PositionCallback,
  currentPositionError: PositionErrorCallback
) => {
  return await navigator.geolocation.getCurrentPosition(currentPositionSuccess, currentPositionError, option)
}

export const currentPositionSuccess = (position: GeolocationPosition) => {
  return position
}

export const currentPositionError = (positionError: GeolocationPositionError) => {
  return positionError
}

export const positionConvToAddress = async (position: GeolocationPosition) => {
  const geocoder = new google.maps.Geocoder()
  const latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
  return await geocoder.geocode(
    {
      location: latlng,
    },
    execPositionConvToAddress
  )
}

export const execPositionConvToAddress = (
  results: google.maps.GeocoderResult[] | null,
  status: google.maps.GeocoderStatus
) => {
  let ret = null
  if (status === google.maps.GeocoderStatus.OK) {
    if (results) {
      ret = results[0]
    }
  }
  return ret
}

export default (_context: Context, inject: Function) => {
  inject('isGeolocation', isGeolocation)
  inject('getCurrentPosition', getCurrentPosition)
  inject('positionConvToAddress', positionConvToAddress)
}
