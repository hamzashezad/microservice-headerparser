const express = require('express')
const app = express()

app.get('/', (request, response) => {
  const ipaddress = request.headers['x-forwarded-for'] || request.hostname

  response.send({
    ipaddress: ipaddress.split(',')[0],
    language: request.headers['accept-language'].split(',')[0],
    software: request.headers['user-agent'].split('(')[1].split(')')[0]
  })
})

const listener = app.listen(process.env.PORT, () => {
  console.log(`Listening. Open your app http://localhost:${listener.address().port}`)
})
