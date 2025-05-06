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
                message: "Post created successfully",
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
        if (allPost) {
            res.status(200).json({
                success: true,
                message: "Here is all the posts",
                result: allPost
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

const getPostByUser = (req, res) => {
    const user = req.params.userName
    userModel
        .find({
            userName: user
        })
        .then((result) => {
            if (result.length) {
                res.status(200).json({
                    success: true,
                    message: `Here are all the posts for: ${user}`,
                    posts: result
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: `${user} has no posts`
                })
            }
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "Server Error",
                error: error.message
            })
        })
}

const updatePostById = (req, res) => {
    const {
        title,
        body,
        image,
        video
    } = req.body
    const updatePost = req.params.PostId
    postModel
        .findByIdAndUpdate(
            updatePost, { title, body, image, video }, { new: true })
        .then((result) => {
            res.status(200).json({
                success: true,
                message: "Post has been updated",
                newPost: result
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

const deletePostById = (req, res) => {
    const deletePost = req.params.PostId
    postModel
        .findByIdAndDelete(deletePost)
        .then((result) => {
            res.status(200).json({
                success: true,
                message: "Post has been deleted successfully",
                deletedPost: result
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

module.exports = {
    createPost,
    getAllPost,
    getPostByUser,
    updatePostById,
    deletePostById
}
