const router = require('express').Router();
const { getAllProducts, getById, add, edit, remove } = require('../services/productService');

router.get('/read', async (req, res) => {
    try {
        const products = await getAllProducts();
        return res.status(200).json({ products });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message })
    }
});

router.get('/read/:productId', async (req, res) => {
    const productId = req.params.productId;
    try {
        const product = await getById(productId);
        return res.status(200).json({ product });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
});

router.post('/add', async (req, res) => {
    const productInfo = req.body;
    try {
        const newProduct = await add(productInfo);
        return res.status(201).json({ newProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message })
    }
});

router.put('/edit', async (req, res) => {
    const { productId, productInfo } = req.body;
    try {
        const updatedProduct = await edit(productId, productInfo);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found!' });
        }
        return res.status(200).json({ updatedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
});

router.delete('/delete', async (req, res) => {
    const { productId } = req.body;
    try {
        const deletedProduct = await remove(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found!' });
        }
        return res.status(200).json({ message: 'Product successfully deleted!', deletedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;