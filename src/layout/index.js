/*
* @Author: wangxuan
* @Date:   2019-06-29 16:59:04
* @Last Modified by:   wangxuan
* @Last Modified time: 2019-07-06 19:59:44
*/

import { Component } from 'react';
import { Layout, Menu, Icon} from 'antd';
import Link from 'umi/link';


const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
  render() {
    return (

        <Layout>
            <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                    <SubMenu 
                        key="Sub1" 
                        title={<span><Icon type="pie-chart" /><span>Hello World</span></span>}
                    >
                        <Menu.Item key="2"><Link to="/list">List</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/card">Card</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/demo">Demo</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/tree">Tree</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/puzzlecards">Puzzlecards</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/carousel">Carousel</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/chart">Chart</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
                    >
                       <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
                       <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                       <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>

            <Layout >
                <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

      </Layout>
    )
  }
}