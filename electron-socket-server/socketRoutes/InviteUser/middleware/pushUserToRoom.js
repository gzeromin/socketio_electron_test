'use strict';

module.exports = (result, message) => {
  const Room = require('../../../model/Room');
  const Task = [];
  if(!result.targetUser) return Promise.reject(new Error('User Not Found'));
  const query = {
    _id: message.roomId
  };
  const update = {
    $push: {
      participants: result.targetUser._id
    }
  };
  const options = {
    new: true
  }
  result.targetUser.rooms.push(message.roomId);
  Task.push(result.targetUser.save());
  Task.push(Room.findOneAndUpdate(query, update, options).exec());
  return new Promise((resolve, reject) => {
    Promise.all(Task)
      .then((taskResults)=> {
        result.taskResults = taskResults;
        return resolve(result);
      })
      .catch((errors) => {
        return reject(errors);
      });
  });
};