'use strict';

exports.createSocket = (io, socketURL, socketOptions) => {
  return io(socketURL, socketOptions);
};

exports.addHandlers = (socket, win, handlerManager) => {
  let listeners = [];
  handlerManager.forEach((handler) => {
    if(handler.type === 1) { return; }
    let callback = handler.handler.bind(null, socket, win);
    listeners.push(callback);
    socket.on(handler.event, callback);
  });
  return listeners;
};

exports.addHandler = (socket, win, handler) => {
  let listener = handler.handler.bind(null, socket, win);
  socket.on(handler.event, listener);
  return listener;
}

exports.addHandlerWithTokenManager = (socket, win, handler, TokenManager) => {
  let listener = handler.handler.bind(null, socket, win, TokenManager);
  socket.on(handler.event, listener);
  return listener;
}