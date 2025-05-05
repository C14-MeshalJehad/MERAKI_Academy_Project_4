const userModel = require("../models/userSchema")
const usersRouter = require("../routes/users")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const SECRET = process.env.SECRET_KEY;
const TOKEN_EXP_DATE = process.env.TOKEN_EXP_DATE;
const ROLE = process.env.ROLE


const Register = (req, res) => {
    const {
        userName,
        displayName,
        email,
        password,
        dateOfBirth,
        country,
        phoneNumber,
    } = req.body
    const newUser = new userModel({
        userName,
        displayName,
        email,
        password,
        dateOfBirth,
        country,
        phoneNumber,
        role: ROLE,
        joinDate: new Date()
    })
    newUser
        .save()
        .then((result) => {
            res.status(201).json({
                success: true,
                message: "Account Created Successfully",
                author: result,
            })
        })
        .catch((error) => {
            res.status(409).json({
                success: false,
                message: "Email or phone number already exists",
                error: error.message
            })
        })
}

const Login = (req, res) => {
    const { email, password } = req.body
    userModel
        .findOne({
            email,
        })
        .then(async (result) => {
            if (!result) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid email or password",
                })
            } else {
                const dbHashedPass = result.password
                const isMatch = await bcrypt.compare(password, dbHashedPass);
                if (!isMatch) {
                    res.status(401).json({
                        success: false,
                        message: "Invalid email or password"
                    })
                } else {
                    const payload = {
                        userId: result._id,
                        userName: result.userName,
                        displayName: result.displayName,
                        role: result.role
                    }
                    const options = {
                        expiresIn: TOKEN_EXP_DATE,
                    }
                    const token = jwt.sign(payload, SECRET, options)
                    res.status(200).json({
                        success: true,
                        message: "Welcome",
                        token: token
                    })
                }
            }
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "Server Error",
                error: error.message
            })
        })
}

module.exports = {
    Register,
    Login
}