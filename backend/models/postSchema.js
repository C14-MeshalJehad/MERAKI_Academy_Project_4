const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String
    },
    body: {

    },
    author: {

    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    },
    replies: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment"
    },
    created: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    }
    
})

const model = mongoose.model("Post", postSchema)
module.exports = model;

// likes and replies should be in array!