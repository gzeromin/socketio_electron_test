'use strict';

module.exports = (socket, result) => {
  const User = require('../../../model/User');
  const query = {
    _id: result.user._id
  };
  const update = {
    $pull: {
      rooms: result.room._id
    }
  };
  const options = {
    new: true
  };

  return new Promise((resolve, reject) => {
    User.findOneAndUpdate(query, update, options)
      .then((user) => {
        result.user = user;
        socket.leave(result.room._id, (error) => {
          if(error) {
            return reject(error);
          }
          return resolve(result);
        });
      })
      .catch((error) => {
        return reject(error);
      });
  })

}