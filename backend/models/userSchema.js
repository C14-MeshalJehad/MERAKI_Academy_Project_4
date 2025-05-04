const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number
    },
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    },
    bio: {
        type: String
    },
    followers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Follower"
    },
    following: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Follower"
    },
    dateOfBirth: {
        type: String
    },
    joinDate: {
        type: Number
    },
    avatar: {
        type: String
    },
    banner: {
        type: String
    },
})

const model = mongoose.model("User", userSchema);
module.exports = model;


