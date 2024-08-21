import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import AppCarousel from '../AppCarousel/AppCarousel';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../lib/util/constants';

const carouselItems = [
    {
        key: '1',
        imageUrl: 'sofa.jpg',
        title: 'Elegant Sofa',
        description: 'Comfortable and stylish.',
    },
    {
        key: '2',
        imageUrl: 'chair.jpg',
        title: 'Modern Chair',
        description: 'Perfect for any room.',
    },
    {
        key: '3',
        imageUrl: 'bed.jpg',
        title: 'Classic Bed',
        description: 'Timeless design.',
    },
    {
        key: '4',
        imageUrl: 'drawer.jpg',
        title: 'Classic Drawer',
        description: 'Timeless design.',
    },
];

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="font-sans bg-warm-sand min-h-screen flex flex-col">
            <header className="py-12 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Find Your Perfect Furniture
                    </h1>
                    <p className="text-xl mb-6">
                        Stylish and Comfortable Pieces to Enhance Your Home
                    </p>
                    <Button
                        type="primary"
                        className="bg-bright-blue hover:bg-bright-blue-dark text-soft-off-white"
                        onClick={() => navigate(routes.products)}>
                        Shop Now
                    </Button>
                </div>
            </header>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-deep-forest-green">
                        Featured Products
                    </h2>
                    <AppCarousel
                        items={carouselItems}
                    />
                </div>
            </section>

            <section className="bg-deep-forest-green text-soft-off-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-xl">
                        FurniCure is dedicated to providing high-quality furniture that combines style and comfort.
                        Our curated collections are designed to make your home feel welcoming and elegant.
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-deep-forest-green">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold text-deep-forest-green">Service 1</h3>
                            <p className="text-charcoal-gray">Description of the service provided.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-warm-sand py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-deep-forest-green">What Our Customers Say</h2>
                    <div className="flex flex-col items-center">
                        <blockquote className="bg-white shadow-md rounded-lg p-6 mb-4">
                            <p className="text-lg text-charcoal-gray">
                                "FurniCure transformed my living space with their stylish furniture. Highly recommend!"
                            </p>
                            <footer className="mt-4 text-deep-forest-green">
                                — Customer Name
                            </footer>
                        </blockquote>
                        {/* Repeat for other testimonials */}
                    </div>
                </div>
            </section>

            <section className="bg-bright-blue text-soft-off-white py-12 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
                    <Button type="primary">
                        Get Started
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
