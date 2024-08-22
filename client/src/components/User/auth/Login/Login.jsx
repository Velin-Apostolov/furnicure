import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleReset = () => form.resetFields();

    const onFinish = async (values) => {
        try {
            const response = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.message);
            }
            //... set to global state
            const result = await response.json();
            console.log(result);
            navigate('/');
        } catch (error) {
            throw new Error(error.message);
        } finally {
            handleReset();
        }
    }
    return (
        <div className='login-container'>
            <Form
                form={form}
                name='basic'
                layout='vertical'
                onFinish={onFinish}
                className='login-form'
            >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: 'Please input your username!' }]}
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

                <Form.Item>
                    <Button type='primary' htmlType='submit'>Sign in</Button>
                </Form.Item>
                <div className='already-have-account'>
                    <p>Don't have an account? <Button type="link" onClick={() => navigate('/register')}>Register</Button></p>
                </div>
            </Form>
        </div>
    )
}

export default Login;