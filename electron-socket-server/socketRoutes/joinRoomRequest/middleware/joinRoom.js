'use strict';

module.exports = (message, socket) => {
  return new Promise((resolve, reject) => {
    if(!message) return reject(new Error('Invalid Message'));
    socket.join(message.room._id);
    return resolve(message);
  });
};