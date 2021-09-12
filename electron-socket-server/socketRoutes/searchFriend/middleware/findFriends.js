'use strict';

module.exports = (decodedUser) => {
  const User = require('../../../model/User');
  return User.findOne({_id: decodedUser._id}).populate('friends');
}