'use strict';

module.exports = (decodedUser, message) => {
  const User = require('../../../model/User');
  const query = {
    _id: decodedUser._id
  };
  const update = {
    $pull: {
      friendRequests: message._id
    },
    $push: {
      friends: message._id
    }
  };
  const options = {
    new: true
  };
  return User.findOneAndUpdate(query, update, options).exec();
};