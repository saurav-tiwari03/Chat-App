const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
  console.log(`Server listening on ${PORT}`);
})

app.get('/',(req,res) => {
  res.send(`<title>ChatApp Backend</title>
  <h1>ChatApp Backend</h1>`)
})
const dbConnet = require('./config/database');
dbConnet()

const router = require('./routes/route')
app.use('/api/v1',router)

