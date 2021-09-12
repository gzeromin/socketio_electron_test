'use strict';

(() => {
  const electron = require('electron');
  const ipcRenderer = electron.ipcRenderer;
  ipcRenderer.on('hello', (event, args) => {
    event.sender.send('destroyWaitDialog');
  })
})();