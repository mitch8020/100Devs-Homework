const express = require('express')
const app = express()
const PORT = 3001

let persons = {
  0: { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  1: { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  2: { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  3: { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
}

app.get('/api/persons', (req,res)=>{
  res.json(persons)
})

app.get('/info', (req,res)=>{
  const currentDate = new Date()
  res.sendFile(__dirname + 'index.html')
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`Your server is running on PORT: ${PORT}! Go catch it!`)
})