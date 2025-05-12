const categoryModel = require("../models/categorySchema")
const postModel = require("../models/postSchema")

const createCategory = (req, res) => {
    const {
        name,
        image,
        title
    } = req.body
    const newCategory = categoryModel({
        name,
        image,
        title
    })
    newCategory
        .save()
        .then((result) => {
            res.status(201).json({
                success: true,
                message: "Category created successfully",
                category: result
            })
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "Error creating category, try later",
                error: error.message
            })
        })
}

const getAllCategorys = async (req, res) => {
    try {
        const allCategorys = await categoryModel.find({})
        if (allCategorys) {
            res.status(200).json({
                success: true,
                message: "Here is all the Categorys",
                result: allCategorys
            })
        } else {
            res.status(404).json({
                success: false,
                message: "No Categorys found",
            })
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }
}

module.exports = {
    createCategory,
    getAllCategorys
}
