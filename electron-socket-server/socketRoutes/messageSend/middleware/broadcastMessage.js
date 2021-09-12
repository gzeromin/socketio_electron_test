'use strict';

module.exports = (messageObject, socket) => {
  console.log(messageObject);
  socket.in(messageObject.room).emit('broadcastMessage', messageObject);
  return Promise.resolve(messageObject);
}