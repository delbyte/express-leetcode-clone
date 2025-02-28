const express = require('express')
const app = express()
const port = 3000

const USERS = [];

const QUESTIONS = {
  
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signup', (req, res) => {
  //Add logic to decode body, body should have email and pw
  


  //Store email and pw as is in the users array for now in the USERS array above (only if the user with the given email doesn't exist)

  //return back 200 status code to the client 
})

app.post('/login', (req, res) => {
  //Add logic to decode body, body should have email and pw



  //Check if the users email exists in the user array, if not, tell user to signup or recheck email
  //Also ensure that the pw is the same

  //IF the pw is the same return 200 back to client and
  //also send back a (user) token (any random string will do for now)
  //if its not the same return 401 back

})

app.get('/questions', (req, res) => {
  
})

app.post('/submit', (req, res) => {
  
})

app.get('/specificQuestion', (req, res) => {
  
})

app.get('/profile', (req, res) => {
  
})



app.listen(port, () => {
  console.log(`Leetcode clone listening on port ${port}`)
})

