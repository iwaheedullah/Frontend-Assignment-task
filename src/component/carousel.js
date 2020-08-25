import React from "react";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 1; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `Corona Virus SYMPTOMS `,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'It can take up to 14 days for symptoms of coronavirus to appear. The main symptoms to look out for are',
    content:
      ' The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, or sore throat. These symptoms are usually mild and begin gradually. Most people (about 80%) recover from the disease without needing special treatment, and for the majority – especially for children and young adults – illness due to COVID-19 is generally minor. However, for some people it can cause serious illness.',
   
  });
}

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

export class CarouselL extends React.Component {
    render() {

        return (

            <div className="Datadisplay-style">

<List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
    }}
    dataSource={listData}
    footer={
    <div></div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://media.npr.org/assets/img/2020/05/05/gettyimages-1216219034_custom-ac3b85749e505dce5dc0db3d086287ad732dd33a.jpg"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
          
        />
        {item.content}
      </List.Item>
    )}
  />,
                
            </div>
    );
    }
}