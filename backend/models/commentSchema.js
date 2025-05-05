const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        
    },
    replies: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment",
    },
    created: {
        type: Date,
        default: Date.now
    },
})

const model = mongoose.model("Comment", commentSchema);
module.exports = model

