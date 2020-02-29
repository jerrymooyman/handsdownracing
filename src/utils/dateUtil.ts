export const epochToJsDate = seconds => {
  var d = new Date(seconds * 1000)
  return d
}

export const secondsFromDate = (seconds, date = new Date()) =>
  (epochToJsDate(seconds) - new Date()) / 1000
