import { Layout } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;

const AuthLayout = ({ children }) => {
    return (
        <Layout className="flex flex-col min-h-screen">
            <Header className="bg-dark-blue text-white p-4">
                <div className="container mx-auto">
                    <h1 className="text-xl text-center">FurniCure</h1>
                </div>
            </Header>
            <Content className="flex-grow p-4">
                <div className="container mx-auto">
                    {children}
                </div>
            </Content>
            <Footer className="bg-gray-200 text-center p-4">
                <div className="container mx-auto">
                    © {new Date().getFullYear()} FurniCure
                </div>
            </Footer>
        </Layout>
    );
}

export default AuthLayout;