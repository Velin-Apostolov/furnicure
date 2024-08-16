import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css';

import AppFooter from '../components/User/AppFooter/AppFooter';
import Navbar from '../components/User/Navbar/Navbar';

const { Content } = Layout;

const MainLayout = ({ children }) => {
    return (
        <Layout className="flex flex-col min-h-screen">
            <Navbar />
            <Content className="flex-grow">
                {children}
            </Content>
            <AppFooter />
        </Layout>
    );
}

export default MainLayout;
