'use strict';

module.exports = (socket, event) => {
  socket.on(event, (err) => {
    console.log(err);
  })
}