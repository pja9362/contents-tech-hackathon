// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// const cafeSchema = new mongoose.Schema({
//   name: String,
//   location: {
//     type: { type: String, default: "Point" },
//     coordinates: [Number],
//   },
// });

// const Cafe = mongoose.model("Cafe", cafeSchema);

// router.get("/addDummyData", async (req, res) => {
//   try {
//     const dummyData = [
//       {
//         name: "카페식물원",
//         location: { coordinates: [126.743, 37.664], type: "Point" },
//       },
//       {
//         name: "플랜트",
//         location: { coordinates: [127.744, 37.665], type: "Point" },
//       },
//       {
//         name: "투썸플레이스 고양킨텍스 2호점",
//         location: { coordinates: [126.745, 37.666], type: "Point" },
//       },
//       {
//         name: "카페테리아 고양킨텍스점",
//         location: { coordinates: [128.746, 37.667], type: "Point" },
//       },
//       {
//         name: "숨맑은집 고양킨텍스점",
//         location: { coordinates: [126.747, 35.668], type: "Point" },
//       },
//       {
//         name: "프렌즈카페",
//         location: { coordinates: [126.748, 34.669], type: "Point" },
//       },
//       {
//         name: "카페, 너와나",
//         location: { coordinates: [126.749, 36.67], type: "Point" },
//       },
//       {
//         name: "할리스 고양킨텍스점",
//         location: { coordinates: [127.75, 37.971], type: "Point" },
//       },
//       {
//         name: "자명문",
//         location: { coordinates: [126.751, 37.672], type: "Point" },
//       },
//       {
//         name: "메가커피 고양킨텍스점",
//         location: { coordinates: [126.752, 37.673], type: "Point" },
//       },
//     ];

//     await Cafe.insertMany(dummyData);
//     res.json({ success: true, message: "더미 데이터 추가 성공!" });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ success: false, message: "더미 데이터 추가 실패", error });
//   }
// });

// module.exports = router;
