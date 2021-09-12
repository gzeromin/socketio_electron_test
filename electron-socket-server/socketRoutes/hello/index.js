'use strict';

module.exports = (socket, event) => {
  socket.on(event, message => {
    console.log(message);
  })
}