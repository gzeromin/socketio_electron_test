'use strict';

function RoomList(document) {
  if(!(this instanceof RoomList)) {
    throw Error('must be created with new keyword');
  }
  const MessageItemFactory = require('./MessageItemFactory');
  this.items = document.getElementById('roomList');
  this.ItemFactory = new MessageItemFactory(document);
  this.CurrentItem = undefined;
  this.PreviousItem = undefined;
  this.eventListener = undefined;
}

RoomList.prototype.addItem = function (room) {
  const roomitem = this.ItemFactory.createRoomItem(room);
  this.items.appendChild(roomitem);
  return Promise.resolve(roomitem);
}

RoomList.prototype.removeItem = function (room) {
  const items = this.items;
  const RoomList = this.items.childNodes;
  const result = Array.prototype.some.call(RoomList, function (element) {
    if (element.id === room.id) {
      items.removeChild(element);
      return true;
    }
    return false;
  })
  return result;
};

RoomList.prototype.setSelectListener = function (listener) {
  if(this.eventListener) {
    this.items.removeEventListener('click', this.eventListener);
  }
  this.eventListener = listener;
  this.items.addEventListener('click', this.eventListener);
};

RoomList.prototype.setCurrentItem = function (item) {
  if(item.tagName !== 'LI') return false;

  if(this.CurrentItem) {
    if(this.CurrentItem === item) {
      return false;
    }
    this.CurrentItem.classList.toggle('selected');
  }
  this.PreviousItem = this.CurrentItem;
  this.CurrentItem = item;
  this.CurrentItem.classList.toggle('selected');
  return true;
}

RoomList.prototype.FailureClearItem = function (_id) {
  const item = this.getCurrentItem();
  item.classList.toggle('selected');
  this.clearCurrentItem();
}

RoomList.prototype.clearCurrentItem = function () {
  this.CurrentItem = undefined;
}

RoomList.prototype.getCurrentItem = function () {
  return this.CurrentItem;
}


module.exports = RoomList;