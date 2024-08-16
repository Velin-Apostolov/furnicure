import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const menuItems = [
    { key: '1', label: 'Products', },
    { key: '2', label: 'Profile', },
    { key: '3', label: 'Wishlist', },
    { key: '4', label: 'Cart', },
];

const routes = {
    1: '/',
    2: '/products',
    3: '/wishlist',
    4: '/cart',
};

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='nav-container p-4 bg-dark-blue'>
            <Menu
                theme="dark"
                mode="horizontal"
                items={menuItems}
                className="flex justify-end gap-4"
                onClick={((item) => navigate(routes[item.key]))}>
            </Menu>
        </div>
    )
}

export default Navbar;