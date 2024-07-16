'use strict'

const dayjs = require("dayjs")

module.exports = async (event, context) => {
  if (!event.body.meeting) {
    return context.status(400).fail("Invalid meeting")
  }
  const result = {
    original: dayjs(event.body.meeting).format('ddd, MMM D, YYYY h:mm A'),
    meeting: dayjs(event.body.meeting).subtract(8, 'hours').format('ddd, MMM D, YYYY h:mm A')
  }

  return context
    .status(200)
    .headers({
      'Content-Type': 'application/json'
    })
    .succeed(result)
}
