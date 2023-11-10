const express = require('express');
const router = express.Router();

const auth = require("./auth");
const api = require('./api/api');
const plants = require('./plants');
const cafe = require('./cafe');

router.get("/", (req, res) => {
    res.locals.title = "Node Chat!";
    res.json("{index}");
});

router.use("/auth", auth);
router.use('/api', api);
router.use('/plants', plants);
router.use('/cafe', cafe);

module.exports = router;
