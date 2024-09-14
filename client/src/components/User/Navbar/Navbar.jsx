import { useState, useEffect, useContext } from "react";
import { Menu, Input, Drawer, Button, Dropdown } from "antd";
import { useNavigate, useLocation, redirect } from "react-router-dom";
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { AuthContext } from "../../../contexts/AuthContext";
import './Navbar.css'

const { Search } = Input;

const loggedInmenuItems = [
    { key: '1', label: 'Products', },
    { key: '2', label: 'Cart', },
    { key: '5', icon: <UserOutlined />, label: 'Profile' },
    { key: '6', label: 'Logout', },
];

const loggedOutMenuItems = [
    { key: '1', label: 'Products' },
    { key: '2', label: 'Cart' },
    { key: '3', label: 'Register' },
    { key: '4', label: 'Login' },
]

const routes = {
    1: '/products',
    2: '/cart',
    3: '/register',
    4: '/login',
    5: '/profile',
};

const Navbar = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [current, setCurrent] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, logout } = useContext(AuthContext);

    const showDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);

    const handleMenuClick = (item) => {
        if (item.key == '6') {
            logout();
            navigate('/login');
        } else {
            navigate(routes[item.key]);
            closeDrawer();
        }
    };

    const handleLogoClick = () => {
        setCurrent(null);
        navigate('/');
    };

    useEffect(() => {
        const currentRouteKey = Object.keys(routes).find(
            (key) => routes[key] === location.pathname
        );
        setCurrent(currentRouteKey || null);
    }, [location.pathname]);

    return (
        <div className='nav-container p-4 bg-primary-dark flex flex-col md:flex-row items-center justify-between gap-4'>
            <div className="flex-shrink-0">
                <img
                    src="/logo-no-background.svg"
                    alt="Logo"
                    className="cursor-pointer h-8 mr-4"
                    onClick={handleLogoClick}
                />
            </div>

            <div className="flex-grow text-center">
                <Search
                    placeholder="Search..."
                    onSearch={(value) => console.log(value)}
                    style={{ width: '100%', maxWidth: 400 }}
                />
            </div>

            <div className="flex-shrink-0 md:hidden">
                <Button
                    icon={<MenuOutlined />}
                    type="primary"
                    onClick={showDrawer}
                    className="bg-filler hover:!bg-filler"
                />
            </div>

            <Drawer
                title="Menu"
                placement="right"
                onClose={closeDrawer}
                open={drawerVisible}
                className="md:hidden"
                width='12rem'
            >
                <Menu
                    items={isLoggedIn ? loggedInmenuItems : loggedOutMenuItems}
                    selectedKeys={current ? [current] : []}
                    onClick={handleMenuClick}
                />
            </Drawer>
            <Menu
                theme="dark"
                mode="horizontal"
                items={isLoggedIn ? loggedInmenuItems : loggedOutMenuItems}
                selectedKeys={current ? [current] : []}
                className="hidden md:flex justify-end flex-grow bg-primary-dark"
                onClick={handleMenuClick}>
            </Menu>
        </div>
    )
}

export default Navbar;