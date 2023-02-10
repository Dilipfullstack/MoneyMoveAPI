function formatMyDate (date) {
  const dateArray = date.split('/')
  // changes dd/mm/yyyy to mm/dd/yyyy
  return `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`
}

function daysLeft (endDate) {
// takes input in mm/dd/yyyy
  const today = new Date()
  const diff = new Date(endDate) - today
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export default {
  // eslint-disable-next-line no-unused-expressions
  formatMyDate,
  daysLeft

}
