'use strict';

module.exports = (socket, result) => {
  socket.join(result.room._id);
  return Promise.resolve(result);
};