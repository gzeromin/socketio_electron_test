'use strict';

function CreateRoomDialog(document) {
  if(!(this instanceof CreateRoomDialog)) {
    throw new Error('must be cretaed with new keyword');
  }
  const Button = require('./Button');
  this.view = document.getElementById('createRoomDialogWrapper');
  this.roomNameInput = document.getElementById('input-roomName');
  this.confirmButton = new Button(document.getElementById('createConfirmButton'));
  this.cancelButton = new Button(document.getElementById('createCancelButton'));
}

CreateRoomDialog.prototype.show = function () {
  this.view.classList.toggle('show');
  return Promise.resolve();
}

CreateRoomDialog.prototype.getRoomName = function () {
  return this.roomNameInput.value;
}

module.exports = CreateRoomDialog;