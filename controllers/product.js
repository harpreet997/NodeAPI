
const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    const Products = await Product.find({})
    res.status(200).json({Products})
}

const createProduct = async (req, res) => {
    const product = await Product.create(req.body)
    res.status(201).json({product})
}

const singleProduct = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id})
    res.json({id: product})
}

const editProduct = (req, res) => {
    res.send('Edit User')
}

const deleteProduct = async (req, res) => {
    const product = await Product.findOneAndDelete({_id: req.params.id})
    res.json({msg: "Deleted Successfully"})
}

module.exports = {
    getAllProducts,
    createProduct,
    singleProduct,
    editProduct,
    deleteProduct
}