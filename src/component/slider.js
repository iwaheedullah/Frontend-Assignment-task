import React from "react";
import './mycss.css';
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';

  const { SubMenu } = Menu;

export class SliderL extends React.Component {

    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        return (



            <div className="slider-style">
                <h2 style={{color:"white"}}> <b>  Main Navigation</b></h2>
                <br></br>
                <div style={{  }}>
                   
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            COVID-19
                </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            COVID-19 Data
                </Menu.Item>
                        <Menu.Item key="3" icon={<ContainerOutlined />}>
                            COVID-19 Countries Data
                </Menu.Item>
                        <SubMenu key="sub1" icon={<MailOutlined />} title="COVID-19 Precaution">
                            <Menu.Item key="5"> Sick People </Menu.Item>
                            <Menu.Item key="6"> Hand Hygine </Menu.Item>
                            <Menu.Item key="7"> Avoid Crowd </Menu.Item>
                            <Menu.Item key="8"> Face Masks </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title=" COVID-19 Symptoms ">
                            <Menu.Item key="9"> Coughing </Menu.Item>
                            <Menu.Item key="10"> Shortness of Breaths </Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11"> Fever </Menu.Item>
                                <Menu.Item key="12"> Sore Throat </Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>

                </div>
            </div>



        );
    }
}