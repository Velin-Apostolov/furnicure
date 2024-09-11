import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../../../../contexts/AuthContext';
import { useContext } from 'react';

const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleReset = () => {
        form.resetFields();
    }

    const onFinish = async (values) => {
        if (values.password != values.repeatPass) {
            throw new Error('Passwords must match!');
        } else {
            try {
                const response = await fetch('http://localhost:3000/user/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values)
                })
                if (!response.ok) {
                    const res = await response.json();
                    throw new Error(res.message);
                }
                const result = await response.json();
                login(result.token);
                navigate('/');
            } catch (error) {
                console.log(error);
                throw new Error(error.message);
            } finally {
                handleReset();
            }
        }
    }

    return (
        <div className='register-container'>
            <Form
                form={form}
                name='basic'
                layout='vertical'
                onFinish={onFinish}
                className='register-form'
            >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input autoComplete='username' />
                </Form.Item>

                <Form.Item
                    label='Email'
                    name='email'
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input autoComplete='email' />
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password autoComplete='new-password' />
                </Form.Item>

                <Form.Item
                    label='Repeat Password'
                    name='repeatPass'
                    rules={[{ required: true, message: 'Please repeat your password!' }]}
                >
                    <Input.Password autoComplete='new-password' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Sign up</Button>
                </Form.Item>
                <div className='already-have-account'>
                    <p>Already have an account? <Button type="link" onClick={() => navigate('/login')}>Log in</Button></p>
                </div>
            </Form>
        </div>
    )
}

export default Register;