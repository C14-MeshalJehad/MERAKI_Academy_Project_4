const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    commenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

const model = mongoose.model("Comment", commentSchema);
module.exports = model

