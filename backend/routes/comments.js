const express = require("express")
const { createComment } = require("../controllers/comment")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const commentRouter = express.Router()
commentRouter.post("/:Postid/comment", authentication,authorization("Create_Comment"), createComment)

module.exports = commentRouter