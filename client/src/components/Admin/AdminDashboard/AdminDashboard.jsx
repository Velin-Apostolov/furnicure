import { Button, Table, Modal } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const navigate = useNavigate();

    const handleEdit = () => {
        console.log('Edit:', selectedRecord);
    };

    const handleDeactivate = () => {
        console.log('Deactivate:', selectedRecord);
    };

    const handleDelete = () => {
        console.log('Delete:', selectedRecord);
    };

    const showModal = (record) => {
        setSelectedRecord(record);
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record) => (
                <Button type="link" onClick={() => showModal(record)}>Actions</Button>
            )
        },
    ]

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/products/read');
                if (!response.ok) {
                    const result = await response.json();
                    throw new Error(result.message);
                }
                const result = await response.json();

                const productsWithKeys = result.products.map(product => ({
                    ...product,
                    key: product._id
                }));
                setProducts(productsWithKeys);
            } catch (error) {
                throw new Error(error.message);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h1 className="text-3xl md:text-4xl">Products</h1>
                <Button
                    type="primary"
                    className="w-full md:w-auto"
                    onClick={() => navigate('/admin/products/add')}
                >
                    Add Product
                </Button>
            </div>
            <div className="mt-8">
                <Table
                    columns={columns}
                    dataSource={products}
                    scroll={{ x: '100%' }}
                    bordered
                />
            </div>
            <Modal
                title={selectedRecord ? selectedRecord.title : null}
                open={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="edit" type="primary" onClick={handleEdit}>
                        Edit
                    </Button>,
                    <Button key="deactivate" onClick={handleDeactivate}>
                        Deactivate
                    </Button>,
                    <Button key="delete" danger onClick={handleDelete}>
                        Delete
                    </Button>,
                ]}
            >
                <p>Are you sure you want to perform this action?</p>
                {/* You can customize this message or add more details as needed */}
            </Modal>
        </div>
    );
}

export default AdminDashboard;