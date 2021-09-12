'use strict';

module.exports = (ipcMain, socket, TokenManager) => {
  const emit = require('./MainWindowAction/emit');
  const getProfile = require('./MainWindowAction/getProfile');
  const MainEvent = require('./MainEvent');

  ipcMain.on(MainEvent.roomListSearch, (event, message) => {
    emit(MainEvent.roomListSearch, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.createRoom, (event, message) => {
    emit(MainEvent.createRoom, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.leaveRoom, (event, message) => {
    emit(MainEvent.leaveRoom, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.joinRoomRequest, (event, message) => {
    emit(MainEvent.joinRoomRequest, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.InviteUser, (event, message) => {
    emit(MainEvent.InviteUser, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.searchUser, (event, message) => {
    emit(MainEvent.searchUser, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.getProfile, (event, message) => {
    getProfile(MainEvent.getProfile, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.searchFriend, (event, message) => {
    emit(MainEvent.searchFriend, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.requestFriendShipUser, (event, message) => {
    emit(MainEvent.requestFriendShipUser, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.acceptFriendShipRequest, (event, message) => {
    emit(MainEvent.acceptFriendShipRequest, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.denyFriendShipRequest, (event, message) => {
    emit(MainEvent.denyFriendShipRequest, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.removeFriendShipRequest, (event, message) => {
    emit(MainEvent.removeFriendShipRequest, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.searchFriendRequest, (event, message) => {
    emit(MainEvent.searchFriendRequest, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.messageSend, (event, message) => {
    emit(MainEvent.messageSend, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.messageLoad, (event, message) => {
    emit(MainEvent.messageLoad, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.receiveMessage, (event, message) => {
    console.log(message)
    emit(MainEvent.receiveMessage, socket, TokenManager, event, message);
  });
  ipcMain.on(MainEvent.receiveInviteUser, (event, message) => {
    emit(MainEvent.receiveInviteUser, socket, TokenManager, event, message);
  });
}