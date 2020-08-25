import React from "react";
import { Layout } from 'antd';
import { BackTop } from 'antd';
import { Fetch } from './fetch';
import { Fetch1 } from './fetch1';
import { HeaderL } from './header';
import { SliderL } from './slider';
import { CarouselL } from "./carousel";


const { Header, Footer, Sider, Content } = Layout;

export class Home extends React.Component {

  render() {

    return (
      <div className="App">

        <div className="Topbar-style">
          <h1>
            <span style={{ color: "white" }}>Wear Mask, Maintain Distance. </span>
                 <b> Stay Safe </b>
          </h1>
        </div>


        <div className="Layout-syle">
          <Layout>
              <Sider style={{ backgroundColor: "black"}}>

                <div className="slider-style">

                    <SliderL></SliderL>

                </div>

              </Sider>

              <Layout>
                <Header style={{ backgroundColor: "black", height:64 }}>

                      <HeaderL></HeaderL>

                </Header>

                <Content style={{backgroundColor:"white"}}>

                        <CarouselL></CarouselL>
                        <Fetch1></Fetch1>
                        <Fetch></Fetch>

                </Content>

                <Footer style={{ backgroundColor: "rgb(20, 1, 1)" }}>

                    <div className="footer-style">
                          <h4 style={{ color: "white" }}><b>React-App</b> developed by <span>Waheed Ullah </span> All Copyrights Reserved 2020</h4>
                    </div>

                </Footer>

              </Layout>

           </Layout>

          
      </div>
        <>
          <BackTop />

             <strong className="site-back-top-basic"> </strong>
        </>,

   </div>

    );

  }

}