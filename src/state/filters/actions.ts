import { ADD_FILTER } from './types'

export const addFilter = (filterId: String) => ({
  type: ADD_FILTER,
  data: {
    filterId
  }
})
