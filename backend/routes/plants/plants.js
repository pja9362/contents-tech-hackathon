const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

// MongoDB 연결 설정
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// MongoDB 클라이언트 연결 설정
async function connectMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB 연결 에러:', error);
  }
}

connectMongoDB();

// 서버 종료 시 MongoDB 클라이언트 연결 닫기
process.on('SIGINT', () => {
  client.close().then(() => {
    console.log('MongoDB 연결 종료');
    process.exit(0);
  });
});

console.log("API for Enroll Plants Info");

// POST 요청 처리
router.post("/", async (req, res) => {
  try {
    const { username, plantType, plantName } = req.body;
    const newPlantInfo = { username, plantType, plantName };
    console.log("newPlantInfo:", newPlantInfo);
    
    // 데이터베이스 작업 수행
    const result = await client.db().collection("plants").insertOne(newPlantInfo);

    // 성공적으로 저장된 경우 응답
    res.json({
      success: true,
      message: "식물 정보가 성공적으로 저장되었습니다.",
    });
  } catch (error) {
    console.error("식물 정보 저장 중 오류:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "식물 정보를 저장하는 동안 오류가 발생했습니다.",
      });
  }
});

module.exports = router;
