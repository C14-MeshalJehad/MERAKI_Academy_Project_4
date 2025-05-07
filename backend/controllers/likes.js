const likeModel = require("../models/likeSchema")
const postsModel = require("../models/postSchema")
const commentModel = require("../models/commentSchema")

const createLikePost = (req, res) => {
    const userName = req.token.userId
    const postId = req.params.Postid
    const newLike = likeModel({
        userName,
        post: postId
    })
    newLike
        .save()
        .then((result) => {
            postsModel
                .findByIdAndUpdate(
                    postId, { $push: { likes: result._id } }, { new: true }
                )
                .populate("displayName")
                .then((result) => {
                    res.status(200).json({
                        success: true,
                        message: "Like has been added on post successfully",
                        like: result
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
            res.status(500).json({
                success: false,
                message: "Server Error",
                error: error.message
            })
        })
}


const createLikeComment = (req, res) => {
    const userName = req.token.userId
    const { comment } = req.body
    const newLike = likeModel({
        userName,
        comment
    })
    newLike
        .save()
        .then((result) => {
            commentModel
                .findByIdAndUpdate(
                    comment, { $push: { likes: result._id } }, { new: true }
                )
                .populate("displayName")
                .then((commentResult) => {
                    res.status(200).json({
                        success: true,
                        message: "Like has been added on comment successfully",
                        like: result
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
            res.status(500).json({
                success: false,
                message: "Server Error",
                error: error.message
            })
        })
}

module.exports = { createLikePost, createLikeComment}