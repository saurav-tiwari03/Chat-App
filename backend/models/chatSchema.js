const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    Chats: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Chats = mongoose.model("Chats", chatSchema);
module.exports = Chats;
