app.use(express.json())
const express = require('express')
const app = express()
const port = 3000

const USERS = [];

const ADMINS = [];

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
  const {email, password} = req.body

  if (!email || !password) {
    res.status(400).json({ message: "Both the email and password are required."})
  }

  const userExists = USERS.some(user => user.email === email)

  if (userExists) {
    return res.status(400).json({ message: "User already exists." })
  }
  //Store email and pw as is in the users array for now in the USERS array above (only if the user with the given email doesn't exist)
  //return back 200 status code to the client 
  else {
    USERS.push(req.body)
    res.status(200).json({ message: "Signup successful!" })
  }

})

app.post('/login', (req, res) => {
  //Add logic to decode body, body should have email and pw
  //Check if the users email exists in the user array, if not, tell user to signup or recheck email
  //Also ensure that the pw is the same
  //IF the pw is the same return 200 back to client and
  //also send back a (user) token (any random string will do for now)
  //if its not the same return 401 back 
  if (req.body.email) {
    if (req.body.password) {
      const userExists = USERS.some(user => user.email === email)

      if (userExists) {
        const current_user = USERS.find(req.body.email)
        
        if (req.body.password == current_user.password) {
          res.status(200).json({ message: "Login successful."})
          res.send('User token: 30Y0Aq34OIajIDwdkcwa9')
        }
        
        else {
          res.status(401).json({ message: 'Incorrect passoword'})
        }
      }
      
      else {
        res.send('Email does not exist in the system, please sign up!')
      }
    }

    else {
      res.send('Password not provided.')
    }
  }

  else {
    res.send('Email/Password not provided.')
  }



})

app.get('/questions', (req, res) => {
  //Return the user all the questions in the QUESTIONS array
  res.json(QUESTIONS);
  
})

app.get('/submit', (req, res) => {
  // return the users submission for this problem 
  res.json(SUBMISSIONS);
})

app.post('/submit', (req, res) => {
  // let the users submit a submission, randomly accept or decline the solution
  // store the submission in the SUBMISSIONS array 
  
  const {qno, submission} = req.body
  SUBMISSIONS.push(req.body)
  res.status(200).json({ message: 'Done'})

})

//hard todos
//create a route that lets an admin add a problem 
//ensure that only admin can add problems
app.post('/addprob', (req, res) => {
  const {email, password, question} = req.body
  if (req.body.email) {
    if (req.body.password) {
      const adminExists = ADMINS.some(admin => admin.email === email)
      if (adminExists) {
        const current_admin = ADMINS.find(req.body.email)

        if (req.body.password == current_admin.password) {
          res.status(200).json({ message: 'Admin login successful!'})
          res.send('Login successful.')

          QUESTIONS.push(req.body.question)
          res.status(200).json({ message: 'Admin question successfully posted!'})
          res.send('Question post successful.')

        }

        else {
          res.status(401).json({ message: 'Admin login unsuccessful!'})
          res.send('Incorrect password.')
        }
      }

      else {
        res.send('You are not an Admin. Please contact the moderators if you think this is a mistake.')
      }

    }
    else {
      res.send('Please enter a password.')
    }

  }

  else {
    res.send('Please enter an email.')
  }
})

app.get('/profile', (req, res) => {

  
})



app.listen(port, () => {
  console.log(`Leetcode clone listening on port ${port}`)
})

