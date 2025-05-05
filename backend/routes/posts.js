const express = require("express")
const authentication = require("../middleware/authentication")
const { createPost } = require("../controllers/posts")
const postsRouter = express.Router()
postsRouter.post("/", authentication, createPost)
//
module.exports = postsRouter