const roleModel = require("../models/rolesSchema");
const reoleRouter = require("../routes/roles")

const createRole = (req, res) => {
    const { role, permissions } = req.body;
    const newRole = new roleModel({
        role,
        permissions
    })
    newRole
        .save()
        .then((result) => {
            res.status(201).json({
                success: true,
                massage: "role success created",
                role: result,
            })
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "Server Error",
                err: error.massage
            })
        })
}

module.exports = { createRole }