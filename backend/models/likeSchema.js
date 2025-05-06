const mongoose = require("mongoose")

const likeSchema = mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const model = mongoose.model("Like", likeSchema)
module.exports = model;