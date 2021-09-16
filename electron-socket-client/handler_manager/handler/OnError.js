'use strict';

module.exports = (socket, win, TokenManager, err) => {
  console.log(`socket error is ${err}`);
  const axios = require('axios');
  //electronexampleserver.au-syd.mybluemix.net
  //127.0.0.1:5003
  const httpInstance = axios.create({baseURL: 'http://electronexampleserver.au-syd.mybluemix.net'});

  const tokenRequest = () => {
    const token = TokenManager.getToken();
    const id = TokenManager.getId();
    return httpInstance.get('users/token?id='+id, {headers: {'x-access-token': token}});
  }

  if(err === 'TokenRefresh') {
    tokenRequest()
      .then((response) => {
        TokenManager.setToken(response.data.token);
        socket.io.opts.query = {token: TokenManager.getToken()};
        win.webContents.send('tokenRefreshing-Success');
      })
      .catch((e) => {
        win.webContents.send('tokenRefreshing-Failure');
      })
  } else {
    win.webContents.send('RedirectLoginPage');
  }
}