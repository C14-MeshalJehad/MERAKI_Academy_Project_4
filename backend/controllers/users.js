const userModel = require("../models/userSchema")
const usersRouter = require("../routes/users")

const Register = (req, res) => {
    const {
        userName,
        displayName,
        email,
        password,
        dateOfBirth,
        country,
        phoneNumber
    } = req.body
    const newUser = new userModel({
        userName,
        displayName,
        email,
        password,
        dateOfBirth,
        country,
        phoneNumber
    })
    newUser
        .save()
        .then((result) => {
            res.status(201).json({
                succes: true,
                message: "Account Created Successfully",
                author: result,
            })
        })
        .catch((error) => {
            res.status(409).json({
                succes: false,
                err: error.message
            })
        })
}

const Login = (req, res) => {
    const { userName, password} = req.body
    userModel
    .findOne({
        userName
    })
    .then((result) => {
        if (!result || result.password !== password) {
            return res.status(401).json({
                succes: false,
                message: "username or password is invalid."
            })
        }
        res.status(200).json({
            succes: true,
            message: "Welcome"
        })
    })
    .catch((error) => {
        res.status(500).json({
            succes: false,
            err: error.message
        })
    })
}

module.exports = { 
    Register,
    Login
}