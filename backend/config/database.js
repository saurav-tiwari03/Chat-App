const mongoose = require('mongoose')
require('dotenv').config();

const dbConnet = async() => {
  try {
    await mongoose.connect(process.env.dbUrl)
    .then(() => {
      console.log('Database connection established')
    })
    .catch(() => {
      console.log('Uable to connect with Database')
    })
  } catch (error) {
    console.log('Error connecting to database')
  }
}

module.exports = dbConnet;