import { Layout } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const AuthLayout = ({ children }) => {
    const navigate = useNavigate();

    return (
        <Layout className="flex flex-col min-h-screen">
            <Header className="bg-dark-blue text-white p-4">
            <div className="flex justify-center items-center">
                <img
                    src="/logo-no-background.svg"
                    alt="Logo"
                    className="cursor-pointer h-8 mr-4"
                />
            </div>
            </Header>
            <Content className="flex-grow p-4">
                <div className="container mx-auto">
                    {children}
                </div>
            </Content>
            <Footer className="bg-dark-blue text-center p-4">
                <div className="flex items-start text-white">
                    © {new Date().getFullYear()} FurniCure
                </div>
            </Footer>
        </Layout>
    );
}

export default AuthLayout;