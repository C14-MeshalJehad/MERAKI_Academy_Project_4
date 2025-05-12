const express = require("express")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const { createPost,
    getAllPost,
    getPostByUser,
    updatePostById,
    deletePostById,
    getPostByCategoryId
} = require("../controllers/posts")
const postsRouter = express.Router()
postsRouter.post("/", authentication, authorization("Create_Post"), createPost)
postsRouter.get("/", authentication, authorization("Manage_Post"), getAllPost)
postsRouter.get("/user/:userName", authentication, authorization("Manage_Post"), getPostByUser)
postsRouter.put("/:PostId", authentication, authorization("Edit_His_Post"), updatePostById)
postsRouter.delete("/:PostId", authentication, authorization("Delete_his_post"), deletePostById)
postsRouter.get("/:categoryId", getPostByCategoryId)

module.exports = postsRouter
