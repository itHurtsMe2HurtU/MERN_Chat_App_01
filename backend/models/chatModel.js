// ---------- Defining Schema and Model for "Chat" with mongoose ---------- //

// chatName (name of the chat)
// isGroupChat (if it's a group-chat or not?)
// users (list of users/ participants of the chat, i.e., for single-chat, it will contain 2 users, etc)
// latestMessage (reference to the latest messages)
// groupAdmin (if it's a group-chat, then it will contain info about the group-admin)

const mongoose = require("mongoose")

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },

        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],

        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        },

        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },

    {
        timestamps: true
    }
)

const Chat = mongoose.model("Chat", chatModel)

module.exports = Chat;