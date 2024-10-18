import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Typography, Descriptions, Skeleton, InputNumber } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import BackToLocation from "../../../Util/BackToLocation";
import { CartContext } from "../../../../contexts/CartContext";
import { MAIN_URL } from "../../../../util/constants";

const { Title } = Typography;

const Product = () => {
    const [product, setProduct] = useState(null);
    const [productQuantity, setProductQuantity] = useState(1);
    const { productId } = useParams();
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async (productId) => {
            try {
                const response = await fetch(`${MAIN_URL()}/products/read/${productId}`);
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
            <BackToLocation
                location='/products'
                title='Products'
            />

            <div className="flex-none w-full md:w-1/2">
                <img
                    alt={product.title}
                    src={product.images[0].url}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <Card
                    title={<Title className="text-gray-800" level={2}>{product.title}</Title>}
                    actions={[
                        <div className="flex items-center gap-2">
                            <InputNumber
                                min={1}
                                value={productQuantity}
                                onChange={(value) => setProductQuantity(value)}
                            />
                            <Button
                                type="primary"
                                icon={<ShoppingCartOutlined />}
                                key="addToCart"
                                onClick={() => addToCart(product, productQuantity)}
                            >
                                Add to Cart
                            </Button>
                        </div>
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