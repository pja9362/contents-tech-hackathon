require('dotenv').config();

const express = require("express");
const axios = require("axios");
const router = express.Router();

// 공공데이터포털 API 엔드포인트
// const apiKey = process.env.API_KEY;
const apiUrl =
  "http://openapi.nature.go.kr/openapi/service/rest/KpniService/btncInfo";


router.get("/getPlantData", async (req, res) => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${apiKey}`, 
        },
      });
  
      const data = response.data;
  
      // 데이터 처리 및 응답
      res.json(data);
    } catch (error) {
      console.error("API 요청 중 오류:", error);
      res.status(500).json({ error: "API 요청 중 오류" });
    }
  });
  
  module.exports = router;