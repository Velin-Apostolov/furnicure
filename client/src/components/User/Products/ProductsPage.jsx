import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Space } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const { Meta } = Card;

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const searchParams = new URLSearchParams(location.search);
                const searchQuery = searchParams.get('search') || '';
                const endpoint = searchQuery
                    ? `http://localhost:3000/products?search=${encodeURIComponent(searchQuery)}`
                    : 'http://localhost:3000/products';

                const response = await fetch(endpoint);
                if (!response.ok) {
                    const result = await response.json();
                    throw new Error(result.message);
                }
                const result = await response.json();

                const productsWithKeys = result.products.map(product => ({
                    ...product,
                    key: product._id
                }));
                setProducts(productsWithKeys);
            } catch (error) {
                console.error("Error fetching products:", error.message);
            }
        }
        fetchProducts();
    }, [location.search]);

    return (
        <div className="p-4 bg-primary">
            <h1 className="text-3xl md:text-4xl text-center">{location.search ? 'Search Results' : 'Our Products'}</h1>
            <div className="mt-8">
                <Row gutter={[16, 16]}>
                    {products.length > 0 ? products.map(product => (
                        <Col xs={24} sm={12} md={8} lg={6} key={product.key}>
                            <Card
                                hoverable
                                cover={
                                    <div className="h-64 overflow-hidden flex items-center justify-center bg-gray-100">
                                        <img
                                            alt={product.title}
                                            src={product.images[0].url}
                                            className="h-full object-cover"
                                        />
                                    </div>
                                }
                                actions={[
                                    <Button className='bg-accent hover:!bg-accent-dark' type="primary" onClick={() => navigate(`/product/${product.key}`)}>View</Button>,
                                    <Button onClick={() => navigate(`/cart/add/${product.key}`)}>Add to Cart</Button>,
                                ]}
                            >
                                <Meta
                                    title={product.title}
                                    description={`Price: $${product.price}`}
                                />
                                <p>{product.description}</p>
                            </Card>
                        </Col>
                    )) : (
                        <Col span={24}>
                            <div className="text-center">
                                <p>No products found for your search query.</p>
                            </div>
                        </Col>
                    )}
                </Row>
            </div>
        </div>
    );
}

export default ProductsPage;
