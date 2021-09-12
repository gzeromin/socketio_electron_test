'use strict';

module.exports = (user, message, ack) => {
  return new Promise((resolve, reject) => {
    if(!user) {
      const error = new Error('Not Found User');
      return reject(error);
    }
    message.result = user;
    message.isSuccess = true;
    message.Error = undefined;
    ack(message);
    return resolve();
  })
}