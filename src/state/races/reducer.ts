import { FETCH_RACING_DATA } from './types'
import { organiseRaceSummaries } from '../../utils/raceDataOriganise'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_RACING_DATA:
      const { race_summaries, next_to_go_ids } = action.data.data
      return organiseRaceSummaries(state, next_to_go_ids, race_summaries)
  }
  return state
}
