import React from "react";
import './mycss.css';
import { Statistic, Row, Col } from 'antd';
import { Card } from 'antd';
import { Divider } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export class Fetch1 extends React.Component {

    constructor() {
        super();
        this.state = {

            data: false,
        }
    }

    componentDidMount() {
        let url = "https://disease.sh/v3/covid-19/all"
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((result) => {
                result.json().then((resp) => {
                    this.setState({ data: resp })
                })
            })

    }

    render() {

        const data = this.state.data;
        console.warn(data)

        return (

            <div>
                <div className="Datadisplay-style">

                    <h1> <span style={{ color: "red" }}>Coronavirus  Disease </span> (COVID-19) Dashboard</h1>
                    <Divider style={{ marginLeft: -10 }} />
                    <Row style={{ marginLeft: 10 }} gutter={16}>

                        <Col span={8}>
                            <b><Statistic style={{ marginTop: 16 }} title="Confirmed Cases" value={data.active} /></b>
                        </Col>

                        <Col span={8}>
                            <b><Statistic style={{ marginTop: 16 }} title="Today Cases" value={data.todayCases} /></b>
                        </Col>

                        <Col span={8}>
                            <b><Statistic style={{ marginTop: 16 }} title="Death Cases" value={data.deaths} /></b>
                        </Col>

                        <Col span={8}>
                            <b><Statistic style={{ marginTop: 16 }} title="Today Death " value={data.todayDeaths} /></b>
                        </Col>

                        <Col span={8}>
                            <b><Statistic style={{ marginTop: 16 }} title="Recovered" value={data.recovered} /></b>
                        </Col>

                        <Col span={8}>
                            <b><Statistic style={{ marginTop: 16 }} title="Today Recovered" value={data.todayRecovered} /></b>
                        </Col>

                        <Col span={8}>
                            <b><Statistic style={{ marginTop: 16 }} title="Active" value={data.active} /></b>
                        </Col>

                        <Col span={8}>
                            <b><Statistic style={{ marginTop: 16 }} title="Critical" value={data.critical} /></b>
                        </Col>

                        <Col span={8}>
                            <b><Statistic style={{ marginTop: 16 }} title="Tests" value={data.tests} /></b>
                        </Col>

                        <p style={{ color: "red", float: "right", marginLeft: 350, marginTop: 25 }}> * Dashboard numbers are updated as soon as authenticated test results are received from the laboratories</p>
                    </Row>

                </div>
                <div className="Datadisplay-style">
                <h1> <span style={{ color: "red" }}>Coronavirus  Disease </span> (COVID-19) Statistic </h1>
                    <Divider style={{ marginLeft: -10 }} />

                    <div className="site-statistic-demo-card">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                        title="Confirmed Cases"
                                        value={data.cases}
                                        precision={2}
                                        valueStyle={{ color: '#cf1322' }}
                                        prefix={<ArrowDownOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                        title="Today Cases"
                                        value={data.todayCases}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                        title="Death Cases"
                                        value={data.deaths}
                                        precision={2}
                                        valueStyle={{ color: '#cf1322' }}
                                        prefix={<ArrowDownOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                        title="Today Deaths"
                                        value={data.todayDeaths}
                                        precision={2}
                                        valueStyle={{ color: '#cf1322' }}
                                        prefix={<ArrowDownOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                        title="Today Recovered"
                                        value={data.todayRecovered}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                        title="Active"
                                        value={data.active}
                                        precision={2}
                                        valueStyle={{ color: '#cf1322' }}
                                        prefix={<ArrowDownOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                        title="Critical"
                                        value={data.critical}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}