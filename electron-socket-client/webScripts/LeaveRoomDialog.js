'use strict';

function LeaveRoomDialog(document) {
  if(!(this instanceof LeaveRoomDialog)) {
    throw new Error('must be cretaed with new keyword');
  }
  const Button = require('./Button');
  this.view = document.getElementById('leaveRoomDialogWrapper');

  this.confirmButton = new Button(document.getElementById('leaveConfirmButton'));
  this.cancelButton = new Button(document.getElementById('leaveCancelButton'));
}
LeaveRoomDialog.prototype.show = function () {
  this.view.classList.toggle('show');
  return Promise.resolve();
}
module.exports = LeaveRoomDialog;