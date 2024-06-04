const express = require("express");
const router = express.Router();

const {login,signup,getUsers} = require('./../controllers/User')

router.get('/users',getUsers)
router.post('/signup', signup)
router.post('/login',login);

module.exports = router;