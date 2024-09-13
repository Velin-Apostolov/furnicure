import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import AppCarousel from '../AppCarousel/AppCarousel';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../lib/util/constants';
import { ClockCircleOutlined, SafetyOutlined, ShoppingCartOutlined, CarOutlined } from '@ant-design/icons';
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';

const carouselItems = [
    { key: '1', imageUrl: 'sofa.jpg', title: 'Elegant Sofa', description: 'Comfortable and stylish.' },
    { key: '2', imageUrl: 'chair.jpg', title: 'Modern Chair', description: 'Perfect for any room.' },
    { key: '3', imageUrl: 'bed.jpg', title: 'Classic Bed', description: 'Timeless design.' },
    { key: '4', imageUrl: 'drawer.jpg', title: 'Classic Drawer', description: 'Timeless design.' },
];

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="font-sans bg-primary min-h-screen flex flex-col">
            <header className="py-14 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary-dark">
                        Find Your Perfect Furniture
                    </h1>
                    <p className="text-2xl mb-8 text-charcoal-gray">
                        Stylish and Comfortable Pieces to Enhance Your Home
                    </p>
                    <Button
                        type="primary"
                        className="bg-accent hover:!bg-accent-dark text-soft-off-white px-8 py-4 text-lg rounded-full transition-colors duration-300"
                        onClick={() => navigate(routes.products)}>
                        Shop Now
                    </Button>
                </div>
            </header>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12">
                        Featured Products
                    </h2>
                    <AppCarousel items={carouselItems} />
                </div>
            </section>

            <section className="text-soft-off-white py-12 bg-filler">
                <div className="container mx-auto px-4 text-center bg-filler">
                    <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-filler">
                        <div className="bg-primary flex flex-col items-center bg-warm-bg p-6 rounded-lg shadow-lg">
                            <CarOutlined className="text-4xl mb-4" />
                            <p className="text-xl leading-tight">Free Delivery</p>
                        </div>
                        <div className="bg-primary flex flex-col items-center bg-warm-bg p-6 rounded-lg shadow-lg">
                            <ShoppingCartOutlined className="text-4xl mb-4" />
                            <p className="text-xl leading-tight">Convenience</p>
                        </div>
                        <div className="bg-primary flex flex-col items-center bg-warm-bg p-6 rounded-lg shadow-lg">
                            <ClockCircleOutlined className="text-4xl mb-4" />
                            <p className="text-xl leading-tight">Fast Shipping</p>
                        </div>
                        <div className="bg-primary flex flex-col items-center bg-warm-bg p-6 rounded-lg shadow-lg">
                            <SafetyOutlined className="text-4xl mb-4" />
                            <p className="text-xl leading-tight">Quality Assurance</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-soft-off-white bg-[#5B6634]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-12">
                        What Our Customers Say
                    </h2>
                    <TestimonialCarousel />
                </div>
            </section>
        </div>
    );
};

export default Home;
