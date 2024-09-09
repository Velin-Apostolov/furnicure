import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import './Login.css'

const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);


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
            const result = await response.json();
            login(result.token);
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
                name='user-login'
                layout='vertical'
                onFinish={onFinish}
                className='login-form'
            >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input autoComplete='username' />
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password autoComplete='current-password' />
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