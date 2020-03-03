import { combineReducers } from 'redux'

import racesReducer from './races/reducer'
import filtersReducer from './filters/reducer'
import {
  CATEGORY_HORSE,
  CATEGORY_HARNESS,
  CATEGORY_GREYHOUND
} from './constants'

const combineReducer = combineReducers({
  raceSummaries: racesReducer,
  filters: filtersReducer,
  nextRaces: () => []
})

const applyFilters = (state, action) => {
  const { horse, harness, greyhound } = state.filters
  const raceSummaries = state.raceSummaries

  const filterArray = []
  if (horse) filterArray.push(CATEGORY_HORSE)
  if (harness) filterArray.push(CATEGORY_HARNESS)
  if (greyhound) filterArray.push(CATEGORY_GREYHOUND)

  if (filterArray.length === 0) return raceSummaries.slice(0, 5)

  return raceSummaries
    .filter(r => filterArray.includes(r.category_id))
    .slice(0, 5)
}

export default (state, action) => {
  const intermediaryState = combineReducer(state, action)
  const nextRaces = applyFilters(intermediaryState, action)
  return { ...intermediaryState, nextRaces }
}
