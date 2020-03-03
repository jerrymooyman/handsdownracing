import _ from 'lodash'

export const organiseRaceSummaries = (state, ids = [], data) => {
  const newData = ids.map(x => data[x])
  return _.merge(state, newData).sort(
    (a, b) => a.advertised_start.seconds - b.advertised_start.seconds
  )
}
