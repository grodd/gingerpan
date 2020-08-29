const mongoose = require('mongoose');
const User = require('../models/user');
const Order = require('../models/order');

mongoose.connect('mongodb://localhost:27017/beusalon');

var db = mongoose.connection;

const users = [
  { userId: 1, name: 'Rahul'},
  { userId: 2, name: 'Ramesh'},
  { userId: 3, name: 'Ankita'}
]

const orders = [
  { orderId: 1, userId: 1, subtotal: 500, date: new Date('2019-01-23') },
  { orderId: 2, userId: 2, subtotal: 400, date: new Date('2019-03-16') },
  { orderId: 3, userId: 1, subtotal: 150, date: new Date('2019-03-20') },
  { orderId: 4, userId: 1, subtotal: 700, date: new Date('2019-03-25') },
  { orderId: 5, userId: 3, subtotal: 200, date: new Date('2019-02-21') },
  { orderId: 6, userId: 3, subtotal: 1500, date: new Date('2019-02-22') },
  { orderId: 7, userId: 1, subtotal: 1200, date: new Date('2019-04-16') },
  { orderId: 8, userId: 2, subtotal: 1600, date: new Date('2019-05-01') },
  { orderId: 9, userId: 2, subtotal: 900, date: new Date('2019-05-23') },
  { orderId: 10, userId: 1, subtotal: 700, date: new Date('2019-04-13') },
]

db.once('open', function(){
  console.log("Connection successful!");

  User.collection.insert(users, function(err, docs){
    if (err) {
      return console.error(err)
    } else {
      console.log("Users seeded!")
    }
  });

  Order.collection.insert(orders, function(err, docs){
    if (err) {
      return console.error(err)
    } else {
      console.log("Orders seeded!")
    }
  })
})