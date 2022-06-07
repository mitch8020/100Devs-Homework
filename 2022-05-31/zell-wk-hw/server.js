const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

MongoClient.connect('mongodb+srv://mitch8020:PeaceLoveUnityRespect@starwarscluster.elx9xpq.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')

    const db = client.db('starwarscluster')
    const quotesCollection = db.collection('quotes')

    app.get('/', (req,res)=>{
      const cursor = quotesCollection.find().toArray()
        .then(results => {
          res.render('index.ejs', { quotes: results})
        })
        .catch(error => console.error(error))
      
      //console.log(cursor)
      //res.sendFile(__dirname + '/index.html')
    })

    app.get('/public/styles.css', (req,res)=>{
      res.sendFile(__dirname + '/public/styles.css')
    })

    app.get('/public/main.js', (req,res)=>{
      res.sendFile(__dirname + '/public/main.js')
    })

    app.post('/quotes', (req,res)=>{
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.put('/quotes', (req,res)=>{
      quotesCollection.findOneAndUpdate(
        { name: 'Yoda'},
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        },
        {
          upsert: true
        }
      )
        .then(result => {
          res.json('Success')
        })
        .catch(error => console.error(error))
    })

    app.delete('/quotes', (req,res)=>{
      quotesCollection.deleteOne(
        { name: req.body.name}
      )
      .then(result => {
        if (result.deletedCount === 0) {
          return res.json('No quote to delete')
        }
        res.json('Deleted Darth Vader\'s quote')
      })
      .catch(error => console.error(error))
    })

    app.listen(PORT, ()=>{
      console.log(`The server is running on PORT: ${PORT}. Go catch it!`)
    })

  })
  .catch(error => console.error(error))

