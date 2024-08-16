import { Layout } from "antd";
import 'antd/dist/reset.css'; // Ensure Ant Design's styles are included

const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className="bg-dark-blue text-left text-white mt-auto">
            FurniCure ©2024
        </Footer>
    );
};

export default AppFooter;