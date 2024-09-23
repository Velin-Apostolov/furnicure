const router = require('express').Router();
const { getAllProducts, getById, add, edit, remove, search } = require('../services/productService');
const upload = require('../config/multer');

router.get('/', async (req, res) => {
    let products;
    try {
        const searchQuery = req.query.search;

        if (searchQuery) {
            products = await search(searchQuery);
        } else {
            products = await getAllProducts();
        }
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

router.post('/add', upload.array('images', 5), async (req, res) => {
    const productInfo = req.body;
    const files = req.files;
    try {
        if (!req.files) {
            return res.status(400).json({ message: 'No image uploaded.' });
        }

        const images = files.map(file => ({
            url: file.path,
            public_id: file.filename,
        }));

        const updatedProductInfo = {
            ...productInfo,
            images
        }

        const newProduct = await add(updatedProductInfo);
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