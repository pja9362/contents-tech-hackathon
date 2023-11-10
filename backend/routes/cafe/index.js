const express = require("express");
const router = express.Router();

const cafeRouter = require("./cafe");
const nearbyCafesRouter = require("./nearbyCafes");

auth.use((req, res, next) => {
  console.log("API for Cafe");
  next();
});

router.use("/cafe", cafeRouter);
router.use("/nearbyCafes", nearbyCafesRouter);


module.exports = router;
