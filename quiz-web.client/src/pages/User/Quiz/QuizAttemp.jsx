import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Card, Typography, Row, Col, Button, Radio, Popconfirm } from 'antd';

import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const QuizAttempt = () => {
  const { id, historyId } = useParams(); 
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
      { rank: 1, name: 'Alice', time: '15 mins', date: '2025-01-23' },
      { rank: 2, name: 'Bob', time: '18 mins', date: '2025-01-23' },
      { rank: 3, name: 'Charlie', time: '20 mins', date: '2025-01-23' },
      { rank: 4, name: 'Dave', time: '22 mins', date: '2025-01-23' },
    ]

  });

  const [remainingTime, setRemainingTime] = useState(quiz.time);

  useEffect(() => {
    const totalSeconds = parseInt(quiz.time) * 60;
    setRemainingTime(totalSeconds);
  }, [quiz.time]);
  useEffect(() => {
    if (remainingTime <= 0) return;
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [remainingTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}m ${seconds}s`;
  };
  const questions = [
    {
      question: 'What is 2 + 2?',
      answers: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
    },
    {
      question: 'What is the capital of France?',
      answers: ['A. Berlin', 'B. Madrid', 'C. Paris', 'D. Rome'],
    },
    {
      question: 'What is 5 * 6?',
      answers: ['A. 28', 'B. 30', 'C. 32', 'D. 34'],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };



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
            title={<span style={{ color: '#1890ff' }}>{`Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`}</span>}
          >
            <Radio.Group
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              {questions[currentQuestion].answers.map((answer, index) => (
                <Radio
                  key={index}
                  value={answer}
                  style={{
                    padding: '10px',
                    border: '1px solid #d6e4ff',
                    borderRadius: '8px',
                    textAlign: 'left',
                    background: '#f0f5ff',
                    color: '#1890ff',
                    cursor: 'pointer',
                  }}
                >
                  {answer}
                </Radio>
              ))}
            </Radio.Group>
            <Row style={{display:'flex', justifyContent:"flex-end", marginTop:"12px"}} gutter={[16, 16]}>
                <Col>
                  <Button
                    disabled={currentQuestion === 0}
                    onClick={handlePrevious}
                    style={{ background: '#f0f5ff', color: '#1890ff', borderColor: '#1890ff' }}
                  >
                    Previous
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    disabled={currentQuestion === questions.length - 1}
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </Col>
              </Row>
          </Card>

        </Col>
        <Col span={6}>
          <Card
            style={{ border: '1px solid #1890ff' }}
            title={<span style={{ color: "#1890ff", display: "flex", justifyContent: "center" }}>
              {formatTime(remainingTime)}
            </span>}
          >
            <Row gutter={[8, 8]}>
              {questions.map((_, index) => (
                <Col key={index} span={4}>
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '10px',
                      background: currentQuestion === index ? '#1890ff' : '#f0f5ff',
                      border: currentQuestion === index ? '2px solid #1890ff' : '1px solid #d6e4ff',
                      borderRadius: '8px',
                      color: currentQuestion === index ? '#ffffff' : '#1890ff',
                      fontWeight: currentQuestion === index ? 'bold' : 'normal',
                    }}
                    onClick={() => {
                      setCurrentQuestion(index)
                    }}
                  >
                    {index + 1}
                  </div>
                </Col>
              ))}
            </Row>
            <Popconfirm
              title="Are you sure you want to cancel and go back?"
              onConfirm={() => {
                navigate(-1)
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button style={{ marginBottom: "12px", marginTop: "12px", width: "100%" }}>Cancel</Button>
            </Popconfirm>
            <Button type='primary' style={{ marginBottom: "12px", width: "100%" }}>Submit</Button>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default QuizAttempt