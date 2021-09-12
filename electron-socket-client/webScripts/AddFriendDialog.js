'use strict';

function AddFriendDialog(document) {
  if(!(this instanceof AddFriendDialog)) {
    throw new Error('must be cretaed with new keyword');
  }
  const Button = require('./Button');
  this.view = document.getElementById('addFriendDialogWrapper');
  this.friendIdInput = document.getElementById('input-friendId');
  this.searchUserResult = document.getElementById('searchUserResult');
  this.searchUserButton = new Button(document.getElementById('searchUserButton'));
  this.elementLoader = document.getElementById('addElementLoader');
  this.confirmButton = new Button(document.getElementById('addFriendConfirmButton'));
  this.cancelButton = new Button(document.getElementById('addFriendCancelButton'));
}

AddFriendDialog.prototype.defaultValue = 'there is not search result';

AddFriendDialog.prototype.show = function () {
  this.view.classList.toggle('show');
}

AddFriendDialog.prototype.loaderPlay = function () {
  this.elementLoader.classList.toggle('show');
}

AddFriendDialog.prototype.search = function () {
  this.searchUserResult.classList.toggle('dismiss');
}

AddFriendDialog.prototype.displayResult = function () {
  this.searchUserResult.classList.toggle('show');
}

AddFriendDialog.prototype.play = function () {
  this.search();
  this.loaderPlay();
}

AddFriendDialog.prototype.finish = function () {
  this.search();
  this.loaderPlay();
  this.displayResult();
}

AddFriendDialog.prototype.getUserId = function () {
  return this.friendIdInput.value;
}

AddFriendDialog.prototype.setSearchResult = function (result) {
  this.searchUserResult.innerText = result;
}

module.exports = AddFriendDialog;