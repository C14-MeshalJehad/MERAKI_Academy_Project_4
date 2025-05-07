const express = require("express")
const { makeFollow, unFollow } = require("../controllers/follower")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const followerRouter = express.Router()
followerRouter.post("/:userId/Follow", authentication, makeFollow)
followerRouter.delete("/unFollow/:userId", authentication, unFollow)

module.exports = followerRouter