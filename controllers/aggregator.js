const mongoose = require('mongoose');
const User = require('../models/user');
const Order = require('../models/order');

function getAverage() {
  let response = Order.aggregate([
    {
      $group: {
        _id: '$userId',
        noOfOrders: { $sum: 1 },
        avg: { $avg: '$subtotal' },
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: '_id',
        foreignField: 'userId',
        as: 'fromUsers',
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: [
            {
              $arrayElemAt: ['$fromUsers', 0],
            },
            '$$ROOT',
          ],
        },
      },
    },
    {
      $project: {
        fromUsers: 0,
        _id: 0,
      },
    },
    {
      $project: {
        userId: '$userId',
        name: '$name',
        noOfOrders: '$noOfOrders',
        averageBillValue: { $floor: '$avg' },
      },
    },
  ]);

  return response;
}

module.exports = getAverage;
