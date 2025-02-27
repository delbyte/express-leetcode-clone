const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/signup', (req, res) => {
  
})

app.get('/login', (req, res) => {
  
})

app.get('/questions', (req, res) => {
  
})

app.get('/submit', (req, res) => {
  
})

app.get('/specificQuestion', (req, res) => {
  
})


app.listen(port, () => {
  console.log(`Leetcode clone listening on port ${port}`)
})

