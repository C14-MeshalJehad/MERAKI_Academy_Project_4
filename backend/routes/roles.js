const express = require("express")
const { createRole } = require("../controllers/roles");
const reoleRouter = express.Router();
reoleRouter.post("/", createRole)
module.exports = reoleRouter