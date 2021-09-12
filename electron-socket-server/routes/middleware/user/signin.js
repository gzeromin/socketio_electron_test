'use strict';


exports.createUser = (req, res, next) => {
  const bcrypt = require("bcrypt");
  const UserModel = require("../../../model/User");

  const {id, password} = req.body;
  if (!id) {
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
  } else if (!password) {
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
  }
  const generateStrictPassword = (salt) => {
    return bcrypt.hash(password, salt);
  }
  const createUser = (strictPassword) => {
    const User = new UserModel({
      id,
      password: strictPassword
    });
    req.CreatedUser = User;
    next();
  };
  const OnError = (error) => {
    return next(error);
  }
  bcrypt.genSalt(13)
    .then(generateStrictPassword)
    .then(createUser)
    .catch(OnError)
}

exports.saveUser = (req, res, next) => {
  const OnError = (error) => {
    return next(error);
  }
  req.CreatedUser.save()
    .then((user) => {
      req.CreatedUser = user;
      return next();
    })
    .catch(OnError)
};

exports.responseToUser = (req, res, next) => {
  return res.json(req.CreatedUser);
};