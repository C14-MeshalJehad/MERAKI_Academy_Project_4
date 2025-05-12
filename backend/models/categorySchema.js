const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    title: {
        type: String
    },
})

const model = mongoose.model("Category", categorySchema)
module.exports = model