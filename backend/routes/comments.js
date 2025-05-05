const express = require("express")
const { createComment } = require("../controllers/comment")
const authentication = require("../middleware/authentication")
const commentRouter = express.Router()
commentRouter.post("/:Postid/comment", authentication, createComment)

module.exports = commentRouter