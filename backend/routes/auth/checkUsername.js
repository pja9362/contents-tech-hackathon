const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB 연결 설정
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


console.log("API for Check username");

// Check username 라우트
router.post('/checkUsername', async (req, res) => {
    try {
      const { username } = req.body;
  
      // username 중복 체크
      const existingUser = await client.db().collection('users').findOne({ username });
      if (existingUser) {
        return res.status(409).json({ message: 'username already exists' });
      }
  
      res.status(200).json({ message: 'username available' });
    } catch (error) {
      console.error('Check username 에러:', error);
      res.status(500).json({ message: 'Error occurred during check username' });
    }
  });
  
module.exports = router;
