import { Link } from "react-router-dom";
import { Space } from "antd";
import { LeftCircleOutlined } from '@ant-design/icons';

const BackToLocation = ({ location, title }) => {
    return (
        <div className="pb-[2rem]">
            <Link to={location}>
                <Space>
                    <LeftCircleOutlined style={{ fontSize: '2rem' }} />
                    <span className="text-lg">Back to {title}</span>
                </Space>
            </Link>
        </div>
    )
}

export default BackToLocation;