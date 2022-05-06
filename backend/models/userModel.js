// ---------- Defining Schema and Model for "User" with mongoose ---------- //
// Name, Email, Password, and Pic/ ProfilePic of the User

const mongoose = require("mongoose")

const userModel = mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        pic: {
            type: String,
            required: true,
            default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userModel)

module.exports = User;