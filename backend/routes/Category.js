const express = require("express")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const { createCategory, getAllCategorys } = require("../controllers/Category")
const categoryRouter = express.Router()
categoryRouter.post("/", createCategory)
categoryRouter.get("/", getAllCategorys)
module.exports = categoryRouter