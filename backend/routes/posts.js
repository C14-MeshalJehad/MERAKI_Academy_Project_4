const express = require("express")
const authentication = require("../middleware/authentication")
const { createPost,
    getAllPost,
    getPostByUser,
    updatePostById,
    deletePostById
} = require("../controllers/posts")
const postsRouter = express.Router()
postsRouter.post("/", authentication, createPost)
postsRouter.get("/", authentication, getAllPost)
postsRouter.get("/user/:userName", getPostByUser)
postsRouter.put("/:PostId", updatePostById)
postsRouter.delete("/:PostId", deletePostById)
//
module.exports = postsRouter