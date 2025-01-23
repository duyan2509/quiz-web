import React from 'react';
import { Tabs, Row, Col, Card, Typography } from 'antd';
import QuizzHistory from './QuizzHistory';
import Revenue from './Revenue';
import PersonalInformation from './PersonalInformation';
const { Title } = Typography;

const { TabPane } = Tabs;

const Setting = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={32}>
                <Col span={24}>
                    <Card>
                        <Tabs
                        tabPosition='left'
                        defaultActiveKey="1" style={{ width: '100%', minHeight:'80vh' }}>
                            {/* Tab 1: Personal Information */}
                            <TabPane tab="Personal Information" key="1">
                               <PersonalInformation/>
                            </TabPane>

                            {/* Tab 2: Revenue */}
                            <TabPane tab="Revenue" key="2">
                                <Revenue/>
                            </TabPane>

                            {/* Tab 3: Quiz History */}
                            <TabPane tab="Quiz History" key="3">
                                <QuizzHistory/>
                            </TabPane>
                            <TabPane tab="Logout" key="4">
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Setting;
