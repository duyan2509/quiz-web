import React, { useState } from 'react';
import { Table, Card, Statistic, Row, Col, DatePicker } from 'antd';
import moment from 'moment';

const data = [
    {
        key: '1',
        title: 'Quiz 1',
        revenue: 100,
        attempts: 50,
    },
    {
        key: '2',
        title: 'Quiz 2',
        revenue: 200,
        attempts: 75,
    },
];

const columns = [
    {
        title: <span style={{ color: '#1890ff' }}>Quizz Name</span>,
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: <span style={{ color: '#1890ff' }}>Revenue</span>,
        dataIndex: 'revenue',
        key: 'revenue',
    },
    {
        title: <span style={{ color: '#1890ff' }}>Attempts</span>,
        dataIndex: 'attempts',
        key: 'attempts',
    },
];

const calculateTotalRevenue = (data) => data.reduce((total, item) => total + item.revenue, 0);
const calculateTotalAttempts = (data) => data.reduce((total, item) => total + item.attempts, 0);

const Revenue = () => {
    const [selectedDate, setSelectedDate] = useState(moment());

    const totalRevenue = calculateTotalRevenue(data);
    const totalAttempts = calculateTotalAttempts(data);

    const handleDateChange = (date) => {
        setSelectedDate(date ? date : moment());
        // Add logic to filter data based on selected date
    };

    return (
        <Card>
            <Row gutter={16}>
                <Col span={24}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ margin: 0,color: '#1890ff' }}>Statistic for {selectedDate.format('MMMM YYYY')}</h2>
                        <DatePicker onChange={handleDateChange} picker="month" />
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card
                        style={{ marginTop: "20px", marginBottom: "20px", border: '1px solid #1890ff', borderRadius: "4px" }}
                    >
                        <Statistic
                            valueStyle={{ color: '#1890ff' }}
                            title="Total Revenue"
                            value={totalRevenue}
                            prefix="$"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        style={{ marginTop: "20px", marginBottom: "20px", border: '1px solid #1890ff', borderRadius: "4px" }}
                    >
                        <Statistic
                            valueStyle={{ color: '#1890ff' }}
                            title="Total Attempts"
                            value={totalAttempts}
                        />
                    </Card>
                </Col>
            </Row>
            <Table
                style={{ marginTop: "20px", marginBottom: "20px", border: '1px solid #1890ff', borderRadius: "4px" }}
                columns={columns} dataSource={data} />
        </Card>
    );
};

export default Revenue;