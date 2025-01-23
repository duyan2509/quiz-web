import React from 'react';
import { Tabs, Row, Col, Card, Typography } from 'antd';
const { Title } = Typography;

const { TabPane } = Tabs;

const Setting = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={32}>
                <Col span={24}>
                    <Card>
                        <Tabs defaultActiveKey="1" style={{ width: '100%' }}>
                            {/* Tab 1: Personal Information */}
                            <TabPane tab="Personal Information" key="1">
                                <div>
                                    <Title level={4}>Personal Information</Title>
                                    {/* Content for personal information */}
                                    <p>Display personal information here...</p>
                                </div>
                            </TabPane>

                            {/* Tab 2: Revenue */}
                            <TabPane tab="Revenue" key="2">
                                <div>
                                    <Title level={4}>Revenue</Title>
                                    {/* Content for revenue */}
                                    <p>Display revenue information here...</p>
                                </div>
                            </TabPane>

                            {/* Tab 3: Quiz History */}
                            <TabPane tab="Quiz History" key="3">
                                <div>
                                    <Title level={4}>Quiz History</Title>
                                    {/* Content for quiz history */}
                                    <p>Display quiz history here...</p>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Setting;
