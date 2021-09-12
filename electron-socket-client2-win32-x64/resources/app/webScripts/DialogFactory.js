'use strict';

function DialogFactory(document) {
  if(!(this instanceof DialogFactory)) {
    throw new Error('must be created with new keyword');
  }
  const AddFriendDialog = require('./AddFriendDialog');
  const CreateRoomDialog = require('./CreateRoomDialog');
  const FriendMenuDialog = require('./FriendMenuDialog');
  const InviteRoomDialog = require('./InviteRoomDialog');
  const LeaveRoomDialog = require('./LeaveRoomDialog');
  const ListFriendDialog = require('./ListFriendDialog');
  const ListFriendRequestDialog = require('./ListFriendRequestDialog');
  const RefreshTokenDialog = require('./RefreshTokenDialog');
  const addFriendDialog = new AddFriendDialog(document);
  const createRoomDialog = new CreateRoomDialog(document);
  const friendMenuDialog = new FriendMenuDialog(document);
  const inviteRoomDialog = new InviteRoomDialog(document);
  const leaveRoomDialog = new LeaveRoomDialog(document);
  const listFriendDialog = new ListFriendDialog(document);
  const listFriendRequestDialog = new ListFriendRequestDialog(document);
  const refreshTokenDialog = new RefreshTokenDialog(document);
  const getDialog = this.getDialog;

  return {
    getDialog,
    addFriendDialog,
    createRoomDialog,
    friendMenuDialog,
    inviteRoomDialog,
    leaveRoomDialog,
    listFriendDialog,
    listFriendRequestDialog,
    refreshTokenDialog
  }
}

DialogFactory.prototype.getDialog = function (id) {
  switch (id) {
    case 'addFriendDialog':
      return this.addFriendDialog;
    case 'createRoomDialog':
      return this.createRoomDialog;
    case 'friendMenuDialog':
      return this.friendMenuDialog;
    case 'inviteRoomDialog':
      return this.inviteRoomDialog;
    case 'leaveRoomDialog':
      return this.leaveRoomDialog;
    case 'listFriendDialog':
      return this.listFriendDialog;
    case 'listFriendRequestDialog':
      return this.listFriendRequestDialog;
    case 'refreshTokenDialog':
      return this.refreshTokenDialog;
  }
}

module.exports = DialogFactory;