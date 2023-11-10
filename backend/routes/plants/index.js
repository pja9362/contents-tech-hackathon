const express = require('express');
const plants = express.Router();

const plantsInfoRouter = require('./enrollPlant');

plants.use((req, res, next) => {
  console.log("API for Plants");
  next();
});

plants.use('/enrollPlant', plantsInfoRouter);

module.exports = plants;