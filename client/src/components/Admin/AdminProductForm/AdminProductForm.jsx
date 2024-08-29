import { Button, Form, Input, InputNumber, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

// const props = {
//     action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload', // To be linked with a CDN
//     onChange({ file, fileList }) {
//         if (file.status !== 'uploading') {
//             console.log(file, fileList);
//         }
//     },
// }; to be added later

const AdminProductForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleReset = () => form.resetFields();

    const onFinish = async (values) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
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
    return (
        <div>
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
                    {/* <Form.Item
                        label='Image'
                        name='image'
                        rules={[{ required: true, message: 'Please upload an image!' }]}
                    >
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item> */}
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form>
            </div>
        </div>
    )
}

export default AdminProductForm;