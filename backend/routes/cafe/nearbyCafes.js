const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// MongoDB 연결 설정
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// cafeModel.js (cafe 스키마 정의 파일)
const cafeSchema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
});

// location 필드에 2dsphere 지리 인덱스 추가
cafeSchema.index({ location: "2dsphere" });

const Cafe = mongoose.model("Cafe", cafeSchema);

router.get("/nearbyCafes", async (req, res) => {
  try {
    const { latitude, longitude, distance } = req.query;

    const nearbyCafes = await Cafe.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          $maxDistance: parseInt(distance), // 1km
        },
      },
    });

    res.json(nearbyCafes);
  } catch (error) {
    console.error("Error fetching nearby cafes:", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching nearby cafes", error });
  }
});

module.exports = router;
