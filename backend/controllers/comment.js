const commentModel = require("../models/commentSchema")
const postModel = require("../models/postSchema")

const createComment = (req, res) => {
    const { comment } = req.body
    const userName = req.token.userId
    const postId = req.params.Postid
    const newComment = new commentModel({
        comment,
        userName,
        post: postId,
    })
    newComment
        .save()
        .then((result) => {
            postModel
                .findByIdAndUpdate(
                    postId, { $push: { comments: result._id } }, { new: true }
                )
                .populate("displayName")
                .then((newCommentResult) => {
                    res.status(200).json({
                        success: true,
                        message: "Comment has been created successfully ",
                        post: result
                    })
                })
                .catch((error) => {
                    res.status(500).json({
                        success: false,
                        message: "Error, there is something wrong",
                        error: error.message
                    })
                })
        })
        .catch((error) => {
            console.log(error);
            
            res.status(500).json({
                success: false,
                message: "Server Error",
                error: error.message
            })
        })
}




module.exports = { createComment }