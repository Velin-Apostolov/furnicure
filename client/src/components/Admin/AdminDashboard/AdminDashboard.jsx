import { Button, Table, Modal, Form, Input, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [form] = Form.useForm();
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log(values);
    }

    const handleEdit = (record) => {
        setSelectedRecord(record);
        form.setFieldsValue({
            title: record.title,
            description: record.description,
            price: record.price,
            quantity: record.quantity,
        })
        setVisible(true);
    };

    const handleDeactivate = () => {
        console.log('Deactivate:', selectedRecord);
    };

    const handleDelete = () => {
        console.log('Delete:', selectedRecord);
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
            className: 'w-1',
            render: (text, record) => (
                <div className="flex justify-center items-center gap-5">
                    <Button key="edit" type="primary" onClick={() => handleEdit(record)}>
                        Edit
                    </Button>
                    <Button key="deactivate" onClick={() => console.log(record)}>
                        Deactivate
                    </Button>
                    <Button key="delete" danger onClick={() => console.log(record)}>
                        Delete
                    </Button>
                </div>
            )
        },
    ]

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://furnicure.onrender.com/products');
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
                open={visible}
                onCancel={handleCancel}
                footer={[]}
            >
                <div>
                    <div className="flex justify-center items-center gap-4">
                        <h2 className="text-4xl">{`Edit ${selectedRecord?.title}`}</h2>
                    </div>
                    <div>
                        <Form
                            form={form}
                            layout="vertical"
                            name="admin-product-form"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label='Title'
                                name='title'
                                rules={[{ required: true, message: 'Please enter a title!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label='Description'
                                name='description'
                                rules={[{ required: true, message: 'Please enter a description!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label='Price'
                                name='price'
                                rules={[{ required: true, message: 'Please enter a price!' }]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item
                                label='Quantity'
                                name='quantity'
                                rules={[{ required: true, message: 'Please enter a quantity!' }]}
                            >
                                <InputNumber />
                            </Form.Item>
                            {/* <Form.Item
                        label='Image'
                        name='image'
                        rules={[{ required: true, message: 'Please upload an image!' }]}
                    >
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item> */}
                            <div className="flex gap-5">
                                <Button type="primary" htmlType="submit">Save</Button>
                                <Button onClick={handleCancel}>Cancel</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default AdminDashboard;