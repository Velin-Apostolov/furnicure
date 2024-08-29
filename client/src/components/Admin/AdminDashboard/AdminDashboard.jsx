import { Button } from "antd";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center gap-4">
            <h1 className="text-4xl">Products</h1>
            <Button type="primary" onClick={() => navigate('/admin/products/add')}>Add Product</Button>
        </div> // TODO: Add table and display all products in the detail, action tab should be 3 vertical dots opening a drop down menu with "Edit" "Delete" "Deactivate"
    )
}

export default AdminDashboard;