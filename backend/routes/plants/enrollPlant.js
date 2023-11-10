const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB 연결 에러:', error);
  }
}

connectMongoDB();

// POST 요청 처리
router.post("/enrollPlant", async (req, res) => {
  try {
    const { username, plantType, plantName } = req.body;

    // Check if the username exists
    const existingUser = await client
      .db()
      .collection('users')
      .findOne({ username });

    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: '유효하지 않은 사용자입니다.',
      });
    }

    // Create a new plant object
    const newPlant = { plantType, plantName };

    // Update the user's document with the new plant information
    await client.db().collection('users').updateOne(
      { username },
      { $push: { plants: newPlant } }
    );

    res.json({
      success: true,
      message: "식물 정보가 성공적으로 저장되었습니다.",
    });
  } catch (error) {
    console.error("식물 정보 저장 중 오류:", error);
    res.status(500).json({
      success: false,
      message: "식물 정보를 저장하는 동안 오류가 발생했습니다.",
    });
  }
});

module.exports = router;
