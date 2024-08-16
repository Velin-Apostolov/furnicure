import { Layout } from "antd";
import 'antd/dist/reset.css';

const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className="bg-dark-blue text-left text-white mt-auto">
            FurniCure ©2024
        </Footer>
    );
};

export default AppFooter;