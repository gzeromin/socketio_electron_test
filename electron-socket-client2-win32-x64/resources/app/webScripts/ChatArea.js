'use strict';

function ChatArea(document) {
  if(!(this instanceof ChatArea)) {
    throw new Error('must be cretaed with new keyword');
  }
  const MessageList = require('./MessageList');
  const MessageInputView = require('./MessageInputView');
  const NotificationList = require('./NotificationList');

  this.MessageList = new MessageList(document);
  this.NotificationList = new NotificationList();
  this.MessageInputView = new MessageInputView(document);

}

module.exports = ChatArea;