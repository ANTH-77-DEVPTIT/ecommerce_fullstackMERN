const Category = require("../models/categoryModel");

const categoryCtrl = {
    getCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            res.json(categories);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createCategory: async (req, res) => {
        try {
            //if user have role === 1 --> admin
            //only admin create, delete, update a category
            const { name } = req.body;
            const category = await Category.findOne({ name });
            if (category)
                return res.status(400).json({ mgs: "This category is exits" });

            const newCategory = new Category({ name });

            await newCategory.save();
            res.json("Created a category")
        } catch (error) {
            return res.status(500).json({ mgs: error.message });
        }
    },
    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndDelete(req.params.id)
            res.json({mgs: "Deleted a Category"})
        } catch (error) {
            return res.status(500).json({mgs: error.message})
        }
    },
    updateCategory: async (req, res ) => {
        try {
            const {name} = req.body
            await Category.findOneAndUpdate({_id: req.params.id}, {name})

            res.json({mgs: "Updated category"})
        } catch (error) {
            return res.status(500).json({mgs: error.message})
        }
    }
};

module.exports = categoryCtrl;
