const express = require("express");
const router = express.Router();

const {login,signup,getUsers} = require('./../controllers/User')
const {chats, newChat,getChats} = require('./../controllers/Chats')

router.get('/users',getUsers)
router.post('/signup', signup)
router.post('/login',login);
router.post('/chats/create',newChat);
router.post('/chats/add',chats)
router.get('/chats',getChats)

module.exports = router;