app.use(express.json())
const express = require('express')
const app = express()
const port = 3000

const USERS = [];

const QUESTIONS = [{
  title: "Two sum", 
  description: "Given an array containing two numbers, add them up and display the result.",
  testCases :[{
    input: "[1,2]",
    output: "3"
  }, {
    input: "[3,4]",
    output: "7"
  }]
}];

const SUBMISSIONS = [{

}];

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.post('/signup', (req, res) => {
  //Add logic to decode body, body should have email and pw
  if (req.body.email) {
    if (USERS.includes(email)) {
      res.send('User already exists.')
    }
    else {
      USERS.push(req.body)
      res.status(200).json({ message: "Signup successful!"});
    }
  }

  else {
    res.send('Email/Password not provided.')
  }
  


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
  //Return the user all the questions in the QUESTIONS array
  
})

app.get('/submit', (req, res) => {
  // return the users submission for this problem 
  
})

app.post('/submit', (req, res) => {
  // let the users submit a problem, randomly accept or decline the solution
  //store the submission in the SUBMISSIONS array 
  
})

//hard todos
//create a route that lets an admin add a problem 
//ensure that only admin can add problems


app.get('/profile', (req, res) => {
  
})



app.listen(port, () => {
  console.log(`Leetcode clone listening on port ${port}`)
})

