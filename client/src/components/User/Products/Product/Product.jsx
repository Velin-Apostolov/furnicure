import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Typography, Descriptions, Skeleton } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Product = () => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async (productId) => {
            try {
                const response = await fetch(`http://localhost:3000/products/read/${productId}`);
                if (!response.ok) {
                    const result = await response.json();
                    throw new Error(result.message);
                }
                const result = await response.json();
                setProduct(result.product);
            } catch (error) {
                throw new Error(error.message);
            }
        }
        fetchProduct(productId);
    }, [productId])

    if (!product) return <Skeleton active />

    return (
        <div className="p-4 flex flex-col md:flex-row gap-4 bg-warm-sand">

            <div className="flex-none w-full md:w-1/2">
                <img
                    alt={product.title}
                    src={product.image}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <Card
                    title={<Title className="text-gray-800" level={2}>{product.title}</Title>}
                    actions={[
                        <Button type="primary" icon={<ShoppingCartOutlined />} key="addToCart">Add to Cart</Button>,
                        <Button type="link" icon={<HeartOutlined />} key="wishlist">Add to Wishlist</Button>
                    ]}
                    className="flex-1 bg-white rounded-lg shadow-lg"
                >
                    <Descriptions bordered column={1}>
                        <Descriptions.Item label="Price">${product?.price?.toFixed(2)}</Descriptions.Item>
                        <Descriptions.Item label="Description">{product.description}</Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>
        </div>
    );
}

export default Product;