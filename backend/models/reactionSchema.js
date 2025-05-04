const mongoose = require("mongoose")

const reactionSchema = mongoose({
    user: {
        type: [mongoose.Schema.Types.ObjectId],
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
    replies: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },

})

const model = mongoose.model("Reaction", reactionSchema)
module.exports = model