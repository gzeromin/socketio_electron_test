'use strict';

module.exports = (messageObject) => {
  return messageObject.populate('sender').execPopulate();
}