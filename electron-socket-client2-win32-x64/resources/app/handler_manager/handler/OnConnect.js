'use strict';

module.exports = (socket, win) => {
  const SocketEvnet = require('../event/SocketEvent');
  console.log(`socket connected. socket id is ${socket.id}`);
  socket.emit(SocketEvnet.HELLO, {message: 'Hello Server'});
  win.webContents.send(SocketEvnet.HELLO, {message: 'Hello Renderer Process'});
}