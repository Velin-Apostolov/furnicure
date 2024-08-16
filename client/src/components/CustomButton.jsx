import { Button } from 'antd';

const CustomButton = ({ title, containerStyles }) => {
    return (
        <Button type='primary'>{title}</Button>
    )
}

export default CustomButton;