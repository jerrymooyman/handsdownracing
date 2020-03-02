import {
  TOGGLE_HORSE_FILTER,
  TOGGLE_HARNESS_FILTER,
  TOGGLE_GREYHOUND_FILTER
} from './types'

const initState = {
  horse: true,
  harness: true,
  greyhound: true
}

export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_HORSE_FILTER:
      return { ...state, horse: !state.horse }
  }
  return state
}