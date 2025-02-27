const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/route1', (req, res) => {
  res.send('Hello World from another route!')
})

app.get('/route2', (req, res) => {
  res.send(<html> <body> <h1>Chat</h1> <h2>Here's an html request being sent from route2. </h2></body></html>)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

