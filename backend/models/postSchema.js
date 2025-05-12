const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    displayName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: String,
    },
    comments: {
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
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }

})

const model = mongoose.model("Post", postSchema)
module.exports = model;

