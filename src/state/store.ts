import { createStore } from 'redux'
import reducers from './reducers'

const initState = {
  races: {
    next_to_go_ids: [],
    race_summaries: {}
  }
}

export const getStore = (state = initState) => createStore(reducers, state)
