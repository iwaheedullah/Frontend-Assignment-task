import React from "react";
import './mycss.css';

import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined, SettingOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export class HeaderL extends React.Component {

    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };


    render() {

        const { current } = this.state;

        return (


            <div className="header-style">


                <h2> Waheed's Design </h2>

                <Menu
                    style={{ float: "right", marginRight: 200 }}
                    onClick={this.handleClick}
                    selectedKeys={[current]}
                    theme="dark"
                    mode="horizontal">
                    <Menu.Item key="home">
                        <a href="https://www.instagram.com/iwaheedullah" target="_blank" rel="noopener noreferrer">
                            Home</a>
                    </Menu.Item>
                    <Menu.Item key="Design">
                        <a href="https://www.instagram.com/iwaheedullah" target="_blank" rel="noopener noreferrer">
                            Design</a>
                    </Menu.Item>
                    <Menu.Item key="product">
                        <a href="https://www.instagram.com/iwaheedullah" target="_blank" rel="noopener noreferrer">
                            Products</a>
                    </Menu.Item>
                    <Menu.Item key="About Us">
                        <a href="https://www.instagram.com/iwaheedullah" target="_blank" rel="noopener noreferrer">
                            About Us</a>
                    </Menu.Item>
                </Menu>

            </div>



        );
    }
}