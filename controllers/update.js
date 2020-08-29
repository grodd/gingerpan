const User = require('../models/user');
const Aggregate = require('./aggregator');

async function Update() {
  await Aggregate().then(function(result){
    result.forEach(async function(item){
      await User.findOneAndUpdate({userId: item['userId']}, {noOfOrders: item['noOfOrders']}, function(err,output){
        if(err){
          throw err;
        }
      })
    })
  })
}

module.exports = Update;