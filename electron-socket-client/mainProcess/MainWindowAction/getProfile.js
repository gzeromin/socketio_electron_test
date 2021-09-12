module.exports = (MainEvnet, TokenManager, event, message) => {
  event.sender.send(MainEvnet, TokenManager.getId());
}