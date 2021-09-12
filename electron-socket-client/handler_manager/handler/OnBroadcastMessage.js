'use strict';
module.exports = (socket, win, TokenManager, message) => {
  win.webContents.send('receiveMessage', message);
}