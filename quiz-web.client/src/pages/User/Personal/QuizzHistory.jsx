import React from 'react';
import { Table, Button ,Typography} from 'antd';
import { useNavigate } from 'react-router-dom';
const {Title}=Typography
const QuizzHistory = () => {
  const navigate = useNavigate();

  const dataSource = [
    {
      key: '1',
      date: '2025-01-01',
      score: 85,
      id: '1',
      name:'OOP Midterm'
    },
    {
      key: '2',
      date: '2025-01-15',
      score: 90,
      id: '2',
      name:'DSA Lab'
    },
    // Add more quiz data here
  ];

  const columns = [
    {
        title: 'Quizz',
        dataIndex: 'name',
        key: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="primary"onClick={() => navigate(`/quizzes/${11}/history/${1}`)}>View Details</Button>
      ),
    },
  ];

  return <Table
  style={{ marginTop: "20px", marginBottom: "20px", border: '1px solid #1890ff', borderRadius: "4px" }}
  title={() => <span style={{ color: "#1890ff" }}><Title style={{ color: "#1890ff" }} level={4}>
    Quiz History</Title></span>}

  dataSource={dataSource} columns={columns} />;
};

export default QuizzHistory;