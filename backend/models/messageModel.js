// ---------- Defining Schema and Model for "Message" with mongoose ---------- //

// name or id of the "Sender" of the message
// "content" of the message, i.e., what is writter inside the message
//'reference to the chat' which it belongs to

const mongoose = require("mongoose")

const messageModel = mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        content: { type: String, trim: true },
        chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" }
    },
    {
        timestamps: true
    }
)

const Message = mongoose.model("Message", messageModel)

module.exports = Message;