const Products = require("../models/productModel");

const productCtrl = {
    getProduct: async (req, res) => {
        try {
            // res.json("tesst")
            const products = await Products.find();
            res.json(products);
        } catch (error) {
            return res.status(500).json({ mgs: error.message });
        }
    },

    createProduct: async (req, res) => {
        try {
            const {
                product_id,
                title,
                price,
                description,
                content,
                images,
                category,
            } = req.body;

            if (!images)
                return res.status(400).json({ mgs: "No Image Upload" });

            const product = await Products.findOne({ product_id });
            if (product)
                return res.status(400).json({ mgs: "Image is arealdy exits" });

            const newProduct = new Products({
                product_id,
                title: title.toLowerCase(),
                price,
                description,
                content,
                images,
                category,
            });

            await newProduct.save()
            res.json({mgs: "Created a product"})
        } catch (error) {
            return res.status(500).json({ mgs: error.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.json({mgs: "Deleted a product"})
        } catch (error) {
            return res.status(500).json({ mgs: error.message });
        }
    },

    updateProduct: async (req, res) =>{
        try {
            const {title, price, description, content, images, category} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            await Products.findOneAndUpdate({_id: req.params.id}, {
                title: title.toLowerCase(), price, description, content, images, category
            })

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
};

module.exports = productCtrl;
