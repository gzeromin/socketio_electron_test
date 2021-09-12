'use strict';

exports.validateParameter = (req, res, next) => {
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
  return next();
};

exports.comparePassword = (req, res, next) => {
  const bcrypt = require("bcrypt");
  const UserModel = require("../../../model/User");

  const {id, password} = req.body;
  const OnError = (error) => {
    return next(error);
  }
  const comparePassword = (user) => {
    if(!user) {
      const error = new Error('User Not found');
      error.status = 404;
      return next(error);
    }
    req.SearchUser = user;
    return bcrypt.compare(password, user.password);
  }
  const compareResultResponse = (isValid) => {
    if (isValid) {
      return next();
    }
    const error = new Error('Invalid password');
    error.status = 401;
    return next(error);
  }
  UserModel.findOne({id}).select({id: 1, password: 1, createdAt: 1})
    .then(comparePassword)
    .then(compareResultResponse)
    .catch(OnError);
};

exports.createJsonWebToken = (req, res, next) => {
  const jsonwebtoken = require("jsonwebtoken");

  const options = {
    algorithm: "HS256",
    expiresIn: "10000000",
    issuer: "http://127.0.0.1"
  };
  const cert = "secret";
  const plainObject = req.SearchUser.toObject({getters: true});
  jsonwebtoken.sign(plainObject, cert, options, (err, token) => {
    if (err) {
      return next(err);
    }
    req.CreatedToken = token;
    return next();
  });
};

exports.updateUserWithToken = (req, res, next) => {
  const OnError = (error) => {
    return next(error);
  }
  const updateResultResponse = (updatedUser) => {
    req.SearchUser = updatedUser;
    return next();
  }
  req.SearchUser.set({token: req.CreatedToken})
  req.SearchUser.save()
    .then(updateResultResponse)
    .catch(OnError)
};

exports.responseToUser = (req, res, next) => {
  res.json({token: req.CreatedToken});
};