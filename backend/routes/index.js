const express = require('express');
const router = express.Router();

// const apiRouter = require('./api/api');
const enrollPlantInfoRouter = require('./plants/plants');

// router.use('/api', apiRouter);
router.use('/plants', enrollPlantInfoRouter);

module.exports = router;
