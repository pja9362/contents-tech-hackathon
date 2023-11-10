const express = require('express');
const auth = express.Router();
const signupRouter = require('./signup');
const checkNickname = require('./checkNickname');

auth.use((req, res, next) => {
  console.log("API for auth");
  next();
});

auth.use('/signup', signupRouter);
auth.use('/checkNickname', checkNickname);

module.exports = auth;