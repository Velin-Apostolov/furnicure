import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleReset = () => {
        form.resetFields();
    }

    const onFinish = async (values) => {
        if (values.password != values['repeat-password']) {
            throw new Error('Passwords must match!');
        } else {
            try {
                const response = await fetch('http://localhost:3000/user/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: values.username, email: values.email, password: values.password })
                })
                if (!response.ok) {
                    const res = await response.json();
                    throw new Error(res.message);
                }
                // .... set to global state
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