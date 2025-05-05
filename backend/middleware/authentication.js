const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET_KEY

const authentication = (req, res, next) => {
    console.log("11");
    
    try {
        if (!req.headers.authorization) {
            return res.status(403).json({
                success: false,
                massage: "Forbidden",
            });
        }
        const token = req.headers.authorization.split(" ").pop();
        jwt.verify(token, SECRET, (err, result) => {
            if (err) {
                res.status(403).json({
                    success: false,
                    massage: "This token is invalid or expired",
                });
            } else {
                console.log(result);
                req.token = result;
                next();
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "Server Error",
            err: error.massage
        });
    }
};

module.exports = authentication