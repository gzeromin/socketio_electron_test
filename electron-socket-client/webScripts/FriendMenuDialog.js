'use strict';

function FriendMenuDialog(document) {
  if(!(this instanceof FriendMenuDialog)) {
    throw new Error('must be cretaed with new keyword');
  }
  const Button = require('./Button');
  this.view = document.getElementById('friendMenuDialogWrapper');
  this.MenuList = document.getElementById('friendMenuList');
  this.CloseButton = new Button(document.getElementById('closeFriendMenuDialogButton'));
  this.eventListener = undefined;
}

FriendMenuDialog.prototype.show = function () {
  this.view.classList.toggle('show');
  return Promise.resolve();
}
FriendMenuDialog.prototype.openDialog = function (dialog, ipcRenderer) {
  dialog.show(ipcRenderer);
}
FriendMenuDialog.prototype.setSelectListener = function (listener) {
  if(this.eventListener){
    this.MenuList.removeEventListener('click',this.eventListener);
  }
  this.eventListener = listener;
  this.MenuList.addEventListener('click',this.eventListener);
};
FriendMenuDialog.prototype.setCloseListener = function (listener) {
  this.CloseButton.setEventListener(listener);
}

module.exports = FriendMenuDialog;