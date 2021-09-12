'use strict';

module.exports = (messageObject, message, ack) => {
  message.result = messageObject;
  message.isSuccess = true;
  message.Error = undefined;
  ack(message);
  return Promise.resolve();
}