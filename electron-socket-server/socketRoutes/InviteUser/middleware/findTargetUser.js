'use strict';

module.exports = (decodedUser, message) => {
  const User = require('../../../model/User');
  return new Promise((resolve, reject) => {
    User.findOne({id: message.id})
      .then((user) => {
        return resolve({targetUser: user, sender: decodedUser})
      })
      .catch((error) => {
        return reject(error);
      })
  })

}