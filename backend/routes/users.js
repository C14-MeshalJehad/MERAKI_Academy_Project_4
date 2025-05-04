const express = require("express")
const { Register, Login } = require("../controllers/users")
const usersRouter = express.Router();
usersRouter.post("/Register", Register)
usersRouter.post("/Login", Login)

module.exports = usersRouter