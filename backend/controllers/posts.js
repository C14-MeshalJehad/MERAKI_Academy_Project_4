const postModel = require("../models/postSchema")
const userModel = require("../models/userSchema")
const postRouter = require("../routes/posts")

const createPost = (req, res) => {
    const displayName = req.token.userId
    const {
        title,
        body,
        image,
        video,
    } = req.body
    const newPost = new postModel({
        title,
        body,
        displayName,
        image,
        video,
    })
    newPost
        .save()
        .then((result) => {
            res.status(201).json({
                success: true,
                message: "Post Created Successfully",
                post: result
            })
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "Error creating post, try later",
                error: error.message
            })
        })
}

const getAllPost = async (req, res) => {
    try {
        const allPost = await postModel
            .find({})
            .populate("displayName")
            .populate("comments")
            .populate("likes")
            .populate("replies")
        const likeCount = allPost.likes.length
        const commentCount = allPost.comments.length
        const repliesCount = allPost.replies.length
        if (getAllPost) {
            res.status(200).json({
                success: true,
                message: "Here is all the posts",
                result: {
                    allPost,
                    likeCount,
                    commentCount,
                    repliesCount
                }
            })
        } else {
            res.status(404).json({
                success: false,
                message: "No posts found",
            })
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }
}

module.exports = { createPost }