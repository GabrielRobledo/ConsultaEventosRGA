import {Menu} from 'antd';
import {HomeOutlined, DatabaseOutlined, BarsOutlined, DashboardOutlined} from '@ant-design/icons';


const sidebar = () => {
  return (
    <Menu theme='dark' style={{paddingTop:'20%'}}>
        
        <Menu.Item key="Home" icon={<HomeOutlined/>}>
            Home
        </Menu.Item>
        <Menu.Item key="consultas" icon={<DashboardOutlined/>}>
            Consultas Eventos
        </Menu.Item>
        <Menu.SubMenu key="Tramites" icon={<DatabaseOutlined/>} title="Tramites">
            <Menu.Item>Notificación Siniestros</Menu.Item>
            <Menu.Item>Pre-Facturación UEP</Menu.Item>
        </Menu.SubMenu>
    </Menu>
  )
}

export default sidebar