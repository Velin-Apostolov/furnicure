import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [form] = Form.useForm();

    const handleReset = () => {
        form.resetFields();
    }

    const onFinish = () => {
        console.log('on finish!');
    }

    return (
        <Form
            form={form}
            name='basic'
            layout='vertical'
            onFinish={onFinish}
        >
            <Form.Item
                label='Username'
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Email'
                name='email'
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label='Repeat Password'
                name='repeat-password'
                rules={[{ required: true, message: 'Please repeat your password!' }]}
            >
                <Input.Password />
            </Form.Item>
        </Form>
    )
}

export default Register;