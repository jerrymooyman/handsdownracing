import {
  TOGGLE_HORSE_FILTER,
  TOGGLE_HARNESS_FILTER,
  TOGGLE_GREYHOUND_FILTER
} from './types'

export const toggleFilter = filter => ({
  type: filter
})
