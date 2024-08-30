const Product = require('../models/Product');

const getAllProducts = async () => {
    try {
        const products = await Product.find({});
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getById = async (productId) => {
    try {
        const product = await Product.findById(productId);
        if (!product) {
            throw new Error('Product does not exist!');
        }
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
}

const add = async (productInfo) => {
    try {
        const newProduct = new Product(productInfo);

        await newProduct.save();

        return newProduct;
    } catch (error) {
        throw new Error('Could not create product: ', error.message);
    }
}

const edit = async (productId, productInfo) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, productInfo, { new: true, runValidators: true });
        if (!updatedProduct) {
            throw new Error('Product not found!');
        }
        return updatedProduct;
    } catch (error) {
        throw new Error(error.message);
    }
}

const remove = async (productId) => {
    try {
        const result = await Product.findByIdAndDelete(productId);
        if (!result) {
            throw new Error('Product not found!');
        }
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getAllProducts,
    getById,
    add,
    edit,
    remove,
}