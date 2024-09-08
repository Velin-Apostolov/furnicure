import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/products/read');
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
    }, []);

    return (
        <div className="p-4">
            {/* Breadcrumbs to be added or another solution for going back */}
            <h1 className="text-3xl md:text-4xl text-center">Our Products</h1>
            <div className="mt-8">
                <Row gutter={[16, 16]}>
                    {products.map(product => (
                        <Col xs={24} sm={12} md={8} lg={6} key={product.key}>
                            <Card
                                hoverable
                                cover={
                                    <div className="h-64 overflow-hidden flex items-center justify-center bg-gray-100">
                                        <img
                                            alt={product.title}
                                            src={product.image || "https://via.placeholder.com/300"}
                                            className="h-full object-cover"
                                        />
                                    </div>
                                }
                                actions={[
                                    <Button type="primary" onClick={() => navigate(`/product/${product.key}`)}>View</Button>,
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
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default ProductsPage;
