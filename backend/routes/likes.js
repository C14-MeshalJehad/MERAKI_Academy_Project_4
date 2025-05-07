const express = require("express")
const { createLikePost, createLikeComment } = require("../controllers/likes")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const likeRouter = express.Router()
likeRouter.post("/:PostId/likePost", authentication,
    authorization("Make_Like"), createLikePost)
    
likeRouter.post("/:CommentId/likeComment", authentication,
    authorization("Make_Like"), createLikeComment)

module.exports = likeRouter
