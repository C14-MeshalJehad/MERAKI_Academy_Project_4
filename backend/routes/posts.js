const express = require("express")
const authentication = require("../middleware/authentication")
const { createPost,
    getAllPost,
    getPostByUser,
    updatePostById
} = require("../controllers/posts")
const postsRouter = express.Router()
postsRouter.post("/", authentication, createPost)
postsRouter.get("/", authentication, getAllPost)
postsRouter.get("/user/:userName", getPostByUser)
postsRouter.put("/:PostId", updatePostById)
//
module.exports = postsRouter