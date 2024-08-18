import { useState, useEffect } from "react";
import { Menu, Input } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const menuItems = [
    { key: '1', label: 'Products', },
    { key: '2', label: 'Wishlist', },
    { key: '3', label: 'Cart', },
    { key: '4', label: 'Register', },
    { key: '5', label: 'Login', },
    { key: '6', label: 'Profile', },
];

const routes = {
    1: '/products',
    2: '/wishlist',
    3: '/cart',
    4: '/register',
    5: '/login',
    6: '/profile',
};

const Navbar = () => {
    const initialKey = Object.keys(routes).find(key => routes[key] === location.pathname);
    const [current, setCurrent] = useState(initialKey || null);
    const navigate = useNavigate();

    useEffect(() => {
        const key = Object.keys(routes).find(key => routes[key] === location.pathname) || null;
        setCurrent(key);
    }, [location.pathname]);

    return (
        <div className='nav-container p-4 bg-dark-blue flex items-center justify-between'>
            <img
                src='logo-no-background.svg'
                alt="Logo"
                className="cursor-pointer h-8 mr-4"
                onClick={() => navigate('/')}
            />
            <Search
                placeholder="Search..."
                onSearch={(value) => console.log(value)}
                style={{ width: 300 }}
                className="mx-4"
            />
            <Menu
                theme="dark"
                mode="horizontal"
                items={menuItems}
                selectedKeys={current ? [current] : []}
                className="flex justify-end gap-4"
                onClick={((item) => {
                    setCurrent(item.key);
                    navigate(routes[item.key]);
                })}>
            </Menu>
        </div>
    )
}

export default Navbar;