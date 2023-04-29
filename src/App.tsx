import React from 'react'
import { Layout } from 'antd'
import HeaderComponent from './components/header/Header'
import AppRouters from './components/router/AppRouters'

const {Content, Footer } = Layout;

const App: React.FC = () => {

  return (
    <Layout>
      <HeaderComponent/>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <AppRouters/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>API Hacker News. ©2023 Created by API Hacker News.</Footer>
    </Layout>
  );
};

export default App