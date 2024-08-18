import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await fetch('http://localhost:3000/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response failed.');
            }
            const result = await response.json();

            if (result.message == 'Login successful!') {
                console.log('Login successful!');
                navigate('/');
                // set to global state...
                handleReset();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    const handleReset = () => form.resetFields();

    return (
        <Form
            form={form}
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout='vertical'
        >
            <Form.Item
                label='Username'
                name='username'
                rules={[{ required: true, message: 'Please input a username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input a password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>

        </Form>
    )
}

export default AdminLogin;