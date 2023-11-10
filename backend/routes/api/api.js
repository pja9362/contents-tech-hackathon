require("dotenv").config();

const express = require("express");
const axios = require("axios");
const router = express.Router();

// 공공데이터포털 API 엔드포인트
const apiKey = process.env.API_KEY;
const apiUrl =
  "http://openapi.nature.go.kr/openapi/service/rest/PlantService/naturalizedSearch2";

console.log("API for Get Plant Data");
console.log("apiKey:", apiKey);

router.get("/getPlantData", async (req, res) => {
  try {
    let allData = [];
    let pageNo = 1; // start with the first page
    const numOfRows = 10; // specify the number of rows per page

    while (true) {
      // Make a request for each page
      const response = await axios.get(apiUrl, {
        params: {
          ServiceKey: apiKey,
          pageNo: pageNo,
          numOfRows: numOfRows,
        },
      });

      const data = response.data;

      // Check if there are items in the response
      if (data.response.body.items.item.length === 0 || pageNo > 10) {
        // No more items, break out of the loop
        break;
      }

      // Add the items to the result array
      allData = allData.concat(data.response.body.items.item);

      // Move to the next page
      pageNo++;
    }

    // 데이터 처리 및 응답
    res.json(allData);
    console.log("allData:", allData);
  } catch (error) {
    console.error("API 요청 중 오류:", error);
    res.status(500).json({ error: "API 요청 중 오류" });
  }
});

module.exports = router;
