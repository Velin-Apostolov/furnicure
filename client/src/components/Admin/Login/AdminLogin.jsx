import { Button, Form, Input } from 'antd';

const AdminLogin = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('Form submitted!', values);
    }
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