import { FETCH_RACING_DATA } from './types'
import config from '../../config'

const fetchData = data => {
  return {
    type: FETCH_RACING_DATA,
    data
  }
}

export const fetchRacingData = () => {
  return async dispatch => {
    try {
      let response = await fetch(config.api_url)
      let responseJson = await response.json()
      dispatch(fetchData(responseJson))
    } catch (error) {
      // TODO: do something meaningful here. i.e. send to ELK
      console.log(`========= error: ${JSON.stringify(error)}`)
    }
  }
}
