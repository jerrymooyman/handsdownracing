export const organiseRaceSummaries = (ids = [], data) => {
  return ids
    .map(id => data[id])
    .sort((a, b) => a.advertised_start.seconds - b.advertised_start.seconds)
}
