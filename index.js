const express = require('express');
const app = express()
const mongoose = require('mongoose');
const Aggregator = require('./controllers/aggregator');
const Update = require('./controllers/update')

mongoose.connect('mongodb://localhost:27017/beusalon');

app.get('/aggregate', function(req, res){
  Aggregator().then((response) => res.json(response))
  
})

app.get('/update', function(req, res){
  Update().then((response) => res.json({success: true, message: 'successfully updated'}))
  
})

app.listen(3000, function(){
  console.log('working')
})