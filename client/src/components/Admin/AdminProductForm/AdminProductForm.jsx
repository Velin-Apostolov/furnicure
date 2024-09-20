import { Button, Form, Input, InputNumber, Upload, Space } from "antd";
import { LeftCircleTwoTone, UploadOutlined } from '@ant-design/icons';
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const AdminProductForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [fileList, setFileList] = useState([]);

    const handleReset = () => form.resetFields();

    const onFinish = async (values) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('price', values.price);
        formData.append('quantity', values.quantity);

        fileList.forEach(file => {
            formData.append('images', file.originFileObj);
        });

        const options = {
            method: 'POST',
            body: formData
        }
        try {
            const response = await fetch('http://localhost:3000/products/add', options);
            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message);
            }
            const result = await response.json();
            navigate('/admin/dashboard');
            handleReset();
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }

    const handleUploadChange = ({ fileList }) => {
        setFileList(fileList)
    }
    return (
        <div>
            <Link to='/admin/dashboard'>
                <Space>
                    <LeftCircleTwoTone style={{ fontSize: '2rem' }} />
                    <span>Back to Dashboard</span>
                </Space>
            </Link>
            <div className="flex justify-center items-center gap-4">
                <h2 className="text-4xl">Add a product</h2>
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
                    <Form.Item
                        label='Image'
                        name='image'
                        rules={[{ required: true, message: 'Please upload an image!' }]}
                    >
                        <Upload
                            listType="picture"
                            onChange={handleUploadChange}
                            fileList={fileList}
                            multiple={true}
                            beforeUpload={() => false}
                        >
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form>
            </div>
        </div>
    )
}

export default AdminProductForm;