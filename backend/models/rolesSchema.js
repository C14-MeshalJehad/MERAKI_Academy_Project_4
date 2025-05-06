const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
    role: {
        type: String,
        required: true,
    },
    permissions: {
        type: [
            {
                type: String,
                required: true
            }
        ]
    }
})

const model = mongoose.model("Role", roleSchema)
module.exports = model