'use strict';

module.exports = (message) => {
  const Room = require('../../../model/Room');
  const count = 30;
  const start = message.page * count;
  return Room.findOne({_id: message._id})
    .populate({
      path: 'messages',
      populate: {
        path: 'sender',
        model: 'User'
      }
    });
}