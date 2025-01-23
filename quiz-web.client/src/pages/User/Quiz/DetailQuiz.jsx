import React from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Card, Typography, Row, Col, Button, Descriptions, Table } from 'antd';

import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const DetailQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState({
    id: 1,
    title: 'Mid-term Math',
    time: '20mins',
    author: { name: 'John Doe', url: '' },
    price: '30k',
    attempts: 2,
    update: '2025-01-23',
    questionCount: 20,
    createdDate: '2025-01-23',
    notes: 'This quiz contains challenging math problems covering algebra, geometry, and calculus.',
    rankings: [
      { rank: 1, name: 'Alice', score: '18/20',time: '15 mins', date: '2025-01-23' },
      { rank: 2, name: 'Bob', score: '16/20',time: '18 mins', date: '2025-01-23' },
      { rank: 3, name: 'Charlie',score: '16/20', time: '20 mins', date: '2025-01-23' },
      { rank: 4, name: 'Dave',score: '16/20', time: '22 mins', date: '2025-01-23' },
    ],
    history: [
      { id:1,score: '18/20', timeTaken: '15 mins', date: '2025-01-23' },
      { id:2,score: '16/20', timeTaken: '18 mins', date: '2025-01-22' },
      { id:3,score: '17/20', timeTaken: '20 mins', date: '2025-01-21' },
      { id:4,score: '19/20', timeTaken: '22 mins', date: '2025-01-20' },
    ]


  });

  const rankingColumns = [
    {
      title: <span style={{ color: '#1890ff' }}>Rank</span>,
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: <span style={{ color: '#1890ff' }}>Name</span>,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: <span style={{ color: '#1890ff' }}>Score</span>,
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: <span style={{ color: '#1890ff' }}>Completion Time</span>,
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: <span style={{ color: '#1890ff' }}>Date Taken</span>,
      dataIndex: 'date',
      key: 'date',
    }
  ];
  const historyColumns = [
    {
      title: <span style={{ color: '#1890ff' }}>Score</span>,
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: <span style={{ color: '#1890ff' }}>Time Taken</span>,
      dataIndex: 'timeTaken',
      key: 'timeTaken',
    },
    {
      title: <span style={{ color: '#1890ff' }}>Date</span>,
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: <span style={{ color: '#1890ff' }}>Action</span>,
      key: 'action',
      render: (text, record) => (
        <Button
          type="link"
          onClick={() => navigate(`/quizzes/${id}/history/${record.id}`)}
        >
          View Detail
        </Button>
      )
    }

  ];



  return (
    <div >
      <Row style={{ paddingInline: '44px', paddingTop: '20px', paddingBottom: "20px", background: "#c0ddf8", marginBottom: "20px" }}>
        <Col>
          <Title style={{ color: "#1890ff", marginBottom: "0px" }}>{quiz.title}</Title>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>


            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <UserOutlined style={{ marginRight: "5px", color: "#1890ff" }} />
              <Text style={{ marginRight: "5px", color: "#1890ff" }} >{quiz.attempts} attemps</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <ClockCircleOutlined style={{ marginRight: "5px", color: "#1890ff" }} />
              <Text style={{ marginRight: "5px", color: "#1890ff" }} >Update at {quiz.update} </Text>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ paddingInline: '44px' }}>
        <Col span={18}>
          <Card
            style={{ border: '1px solid #1890ff' }}
            title={<span style={{ color: "#1890ff" }}>Notes</span>}
          >
            <Paragraph>
              {quiz.notes}
            </Paragraph>
          </Card>
          <Table
            style={{ marginTop: "20px", marginBottom: "20px", border: '1px solid #1890ff', borderRadius: "4px" }}
            title={() => <span style={{ color: "#1890ff" }}><Title style={{ color: "#1890ff" }} level={4}>Leaderboard</Title></span>}
            columns={rankingColumns}
            dataSource={quiz.rankings}
            pagination={true}
            rowKey="rank"
            bordered
          />

          <Table
            style={{ marginTop: "20px", marginBottom: "20px", border: '1px solid #1890ff', borderRadius: "4px" }}
            title={() => <span style={{ color: "#1890ff" }}><Title style={{ color: "#1890ff" }} level={4}>My Attempts</Title></span>}
            columns={historyColumns}
            dataSource={quiz.history}
            pagination={true}
            rowKey="user"
            bordered
          />
        </Col>
        <Col span={6}>
          <Card
            style={{ border: '1px solid #1890ff' }}
            title={<span style={{ color: "#1890ff" }}>Quizz Information</span>}
          >
            <Descriptions>
              <Descriptions.Item label="Price" span={3}><span style={{ color: "#1890ff" }}>{quiz.price}</span></Descriptions.Item>
              <Descriptions.Item label="Number of Questions" span={3}><span style={{ color: "#1890ff" }}>{quiz.questionCount}</span></Descriptions.Item>
              <Descriptions.Item label="Duration" span={3}><span style={{ color: "#1890ff" }}>{quiz.time}</span></Descriptions.Item>
              <Descriptions.Item label="Created Date" span={3}><span style={{ color: "#1890ff" }}>{quiz.createdDate}</span></Descriptions.Item>
            </Descriptions>
            <Button style={{ marginBottom: "12px", marginTop: "12px", width: "100%" }}>Buy Quizz</Button>
            <Button
              onClick={() => {
                navigate(`/quizzes/${id}/attempt`)
              }}
              type='primary'
              style={{ marginBottom: "12px", width: "100%" }}>Start Quizz</Button>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DetailQuiz