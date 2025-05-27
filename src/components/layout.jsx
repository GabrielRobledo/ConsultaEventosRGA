import { Layout , Button, theme} from 'antd';
import { useState, useEffect } from 'react';
import Sidebar from './sidebar'
import TablaConFiltro  from './tabla';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

const BasicLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [datos, setDatos] = useState([]);
  

  return (
    <Layout>
      {/* menu lateral */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        
          <Sidebar />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
          {/* Encabezado */}
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            Recupero de Gastos por Accidentes - UEP-UGP-MSP
          </Header>
          {/* contenido principal (central) */}
          <Content style={{ margin: '24px 0', background: '#fff', padding: 24 }}>
            <h2>Listado de Eventos</h2>
            <TablaConFiltro datos={datos} />
          </Content>

          {/* Pie de página */}
          <Footer style={{ textAlign: 'center' }}>
              ©2025 Gabriel Robledo. Todos los derechos reservados.
          </Footer>
        </Layout>     
    </Layout>  
    
  );
};

export default BasicLayout;
