const mongoose = require("mongoose");

const followerSchema = mongoose.Schema({
    followers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    },
    following: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    }
})

const model = mongoose.model("Follower", followerSchema)
module.exports = model