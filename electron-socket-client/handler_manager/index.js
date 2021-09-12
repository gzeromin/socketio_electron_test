'use strict';

const SocketEvent = require('./event/SocketEvent');
const dict = [];

dict[SocketEvent.CONNECT] = {
  type: 0,
  event: SocketEvent.CONNECT,
  handler: require('./handler/OnConnect')
};
dict[SocketEvent.ERROR] = {
  type: 1,
  event: SocketEvent.ERROR,
  handler: require('./handler/OnError')
};
dict[SocketEvent.CONNECT_TIMEOUT] = {
  type: 0,
  event: SocketEvent.CONNECT_TIMEOUT,
  handler: require('./handler/OnConnectTimeout')
};
dict[SocketEvent.DISCONNECT] = {
  type: 1,
  event: SocketEvent.DISCONNECT,
  handler: require('./handler/OnDisconnect')
};
dict[SocketEvent.HELLO] = {
  type: 0,
  event: SocketEvent.HELLO,
  handler: require('./handler/OnHello')
};
dict[SocketEvent.PING] = {
  type: 0,
  event: SocketEvent.PING,
  handler: require('./handler/OnPing')
};
dict[SocketEvent.PONG] = {
  type: 0,
  event: SocketEvent.PONG,
  handler: require('./handler/OnPong')
};
dict[SocketEvent.RECONNECT_ERROR] = {
  type: 0,
  event: SocketEvent.RECONNECT_ERROR,
  handler: require('./handler/OnReconnectError')
};
dict[SocketEvent.RECONNECT_FAILED] = {
  type: 0,
  event: SocketEvent.RECONNECT_FAILED,
  handler: require('./handler/OnReconnectFailed')
};
dict[SocketEvent.RECONNECTING] = {
  type: 0,
  event: SocketEvent.RECONNECTING,
  handler: require('./handler/OnReconnecting')
};
dict[SocketEvent.RECONNECT_ATTEMPT] = {
  type: 0,
  event: SocketEvent.RECONNECT_ATTEMPT,
  handler: require('./handler/OnReconnectAttempt')
};
dict[SocketEvent.RECONNECT] = {
  type: 0,
  event: SocketEvent.RECONNECT,
  handler: require('./handler/OnReconnect')
};
dict[SocketEvent.TOKENREFRESHREQUIRED] = {
  type: 0,
  event: SocketEvent.TOKENREFRESHREQUIRED,
  handler: require('./handler/OnTokenRefreshRequired')
};
dict[SocketEvent.BROADCAST_MESSAGE] = {
  type: 0,
  event: SocketEvent.BROADCAST_MESSAGE,
  handler: require('./handler/OnBroadcastMessage')
};
dict[SocketEvent.RECEIVE_INVITEUSER] = {
  type: 0,
  event: SocketEvent.RECEIVE_INVITEUSER,
  handler: require('./handler/OnReceiveInviteUser')
};

module.exports = dict;