'use strict';

function NotificationList() {
  if(!(this instanceof NotificationList)) {
    throw new Error('must be created with new keyword');
  }
}

NotificationList.prototype.createNotification = function (item) {
  return new Promise((resolve, reject) => {
    const title = item.sender.id;
    const options = {
      body: item.message,
      data: {
        room: item.room,
        sender: item.sender
      }
    };
    item === undefined? reject(): resolve(new Notification(title, options));
  });
};

NotificationList.prototype.createRoomNotification = function (item) {
  return new Promise((resolve, reject) => {
    const title = `${item.sender.id} invites you to ${item.room.roomName}`;
    const options = {
      body: item.message,
      data: {
        room: item.room,
        sender: item.sender
      }
    };
    item === undefined? reject(): resolve(new Notification(title, options));
  })
}

module.exports = NotificationList;