'use strict';

function ListFriendRequestDialog(document) {
  if(!(this instanceof ListFriendRequestDialog)) {
    throw new Error('must be cretaed with new keyword');
  }
  const Button = require('./Button');
  const MessageItemFactory = require('./MessageItemFactory');
  this.view = document.getElementById('listFriendRequestDialogWrapper');
  this.items = document.getElementById('friendRequestList');
  this.ItemFactory = new MessageItemFactory(document);
  this.CloseButton = new Button(document.getElementById('listFriendCloseButton'));
  this.eventListener = undefined;
}
ListFriendRequestDialog.prototype.show = function (ipcRenderer) {
  const message = {};
  ipcRenderer.send('searchFriendRequest', message);
  this.view.classList.toggle('show');
  return Promise.resolve();
}
ListFriendRequestDialog.prototype.dismiss = function () {
  this.view.classList.toggle('show');
}
ListFriendRequestDialog.prototype.setSelectListener = function (listener) {
  if(this.eventListener) {
    this.items.removeEventListener('click', this.eventListener);
  }
  this.eventListener = listener;
  this.items.addEventListener('click', this.eventListener);
}

ListFriendRequestDialog.prototype.setCloseListener = function (listener) {
  this.CloseButton.setEventListener(listener);
}

ListFriendRequestDialog.prototype.addItem = function (message) {
  const messageItem = this.ItemFactory.createRequestFriendItem(message);
  this.items.appendChild(messageItem);
}

ListFriendRequestDialog.prototype.removeAllItem = function () {
  const items = this.items;
  return new Promise((resolve, reject) => {
    if(!items) return reject();
    while(items.firstChild) {
      items.removeChild(items.lastChild);
    }
    resolve();
  });
};

ListFriendRequestDialog.prototype.excuteLoader = function (id) {
  const items = this.items;
  return new Promise((resolve, reject) => {
    let isExcute = false;
    items.childNodes.forEach(function (element) {
      if(element.id === id) {
        isExcute = true;
        element.lastChild.classList.toggle('show');
      }
    })
    isExcute === true ? resolve() : reject();
  })
}
ListFriendRequestDialog.prototype.removeItem = function (id) {
  this.items.childNodes.forEach(function (element) {
    if(element.id === id) {
      element.remove();
    }
  }, this);
};
module.exports = ListFriendRequestDialog;