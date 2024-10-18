export const routes = {
    home: '/',
    products: '/products',
    profile: '/profile',
    cart: '/cart'
}

export const MAIN_URL = () => {
    if (window.location.hostname === 'localhost') {
        return 'http://localhost:3000';
    } else {
        return 'https://furnicure-c615f.web.app';
    }
}