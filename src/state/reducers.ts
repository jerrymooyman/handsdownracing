import { combineReducers } from 'redux'

import racesReducer from './races/reducer'

export default combineReducers({
  races: racesReducer
})
