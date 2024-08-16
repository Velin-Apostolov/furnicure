import { Menu } from "antd";

const Navbar = () => {
    const menuItems = [
        { key: '1', label: 'Home' },
        { key: '2', label: 'About' },
        { key: '3', label: 'Contact' },
    ];
    return (
        <div className='nav-container'>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} className="flex justify-end gap-4 pr-4">
            </Menu>
        </div>
    )
}

export default Navbar;