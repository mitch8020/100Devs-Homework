const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const PORT = 8000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/public/styles.css', (req,res)=>{
  res.sendFile(__dirname + '/public/styles.css')
})

app.get('/public/main.js', (req,res)=>{
  res.sendFile(__dirname + '/public/main.js')
})

MongoClient.connect('mongodb+srv://mitch8020:PeaceLoveUnityRespect@starwarscluster.elx9xpq.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('starwarscluster')
    
    app.post('/quotes', (req,res)=>{
      console.log(req.body)
    })

  })
  .catch(error => console.error(error))

app.listen(PORT, ()=>{
  console.log(`The server is running on PORT: ${PORT}. Go catch it!`)
})