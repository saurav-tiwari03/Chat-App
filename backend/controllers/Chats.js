const Chat = require('./../models/chatSchema');

exports.newChat = async(req,res) => {
  try {
    const {username} = req.body;
    const response = await Chat.create({username});
    res.status(200).json({
      success: true,
      data:response,
      message:'Chat created successfully'
    })
  } catch (error) {
    console.log(error.message);
    res.stats(500).json({
      success: false,
      message:'Chat not created'
    })
  }
}

exports.chats = async(req, res) => {
  try {
    const { chatId,message, username } = req.body;
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({
        success: false,
        message: 'Chat not found'
      });
    }

    chat.Chats.push({ message: message, by: username });
    await chat.save(); 

    console.log(message);
    res.status(200).json({
      success: true,
      chats: chat,
      message: 'Chats fetched successfully'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getChats = async(req,res) => {
  try {
    const { chatId } = req.query; 
    const chat = await Chat.findById(chatId);
    res.status(200).json({
      success: true,
      data: chat,
      message: 'Chats received successfully'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
