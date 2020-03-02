import { FETCH_RACING_DATA } from './types'

const url = 'https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=15'

const fetchData = data => {
  return {
    type: FETCH_RACING_DATA,
    data
  }
}

export const fetchRacingData = () => {
  return async dispatch => {
    try {
      let response = await fetch(url)
      let responseJson = await response.json()
      return dispatch(fetchData(responseJson))
    } catch (error) {
      // TODO: do something meaningful here. i.e. send to ELK
      console.log(`========= error: ${JSON.stringify(error)}`)
    }
  }
}
