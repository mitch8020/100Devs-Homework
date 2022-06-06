const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/public/styles.css', (req,res)=>{
  res.sendFile(__dirname + '/public/styles.css')
})

app.get('/public/main.js', (req,res)=>{
  res.sendFile(__dirname + '/public/main.js')
})

app.listen(PORT, ()=>{
  console.log(`The server is running on PORT: ${PORT}. Go catch it!`)
})