import React, { useState, useEffect } from 'react';
import {Select,Pagination, Row, Col, Card, Typography, Radio, Input, Space, Button ,TimePicker  } from 'antd';
import moment from 'moment'; 
import Question from '../../../components/Question';
const { Title, Text, Paragraph } = Typography;

const QuizCreate = () => {
    const [quizData, setQuizData] = useState({
        title: 'Untitled Quiz',
        note: 'Enter quiz notes here.',
        duration: '20',
        category: 'Math',
        priceOption: 'free',
        price: '',
        paymentInfo: '',
        questionAmount: 1
    });
    const [categories,setCategories]= useState(['Math', 'Science', 'History', 'Literature']);

    const handleEdit = (key, value) => {
        setQuizData((prev) => ({ ...prev, [key]: value }));
    };
    const [questions, setQuestions] = useState([
        { question: '', option1: '', option2: '', option3: '', option4: '' },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3; 

    const indexOfLastQuestion = currentPage * pageSize;
    const indexOfFirstQuestion = indexOfLastQuestion - pageSize;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleQuestionEdit = (index, key, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index] = {
            ...updatedQuestions[index],
            [key]: value,
        };
        setQuestions(updatedQuestions);
    };

    const addNewQuestion = () => {
        setQuestions([ { question: '', option1: '', option2: '', option3: '', option4: '' },...questions]);
    };
    const handleDeleteQuestion = (index) => {
        setQuestions((prev) => prev.filter((_, i) => i !== index));
    };
    useEffect (()=>{
        setQuizData((prevQuizData) => ({
            ...prevQuizData,
            questionAmount: questions.length, 
        }));

    },[questions.length]);
    const isFormValid = () => {
        console.log(quizData)
        return (
            quizData.title.trim() !== '' &&
            quizData.note.trim() !== '' &&
            quizData.duration > 0 &&
            quizData.category.trim() !== '' &&
            questions.length > 0
        );
    };
    return (
        <div style={{ paddingTop: '20px', paddingInline: '40px', paddingBottom: '12px' }}>
            <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>
                Quiz Setup
            </Title>
            <Row gutter={{ xs: 0, lg: 32 }}>
                <Col span={8}>
                    <Card title={<span style={{ color: "#1890ff" }}>Quizz Information</span>}>
                        {/* Editable Title */}
                        <Text strong style={{ color: '#1890ff' }}>
                            Title:
                        </Text>
                        <Paragraph
                            editable={{
                                onChange: (value) => handleEdit('title', value),
                            }}
                            style={{ marginBottom: '20px' }}
                        >
                            {quizData.title}
                        </Paragraph>

                        {/* Editable Notes */}
                        <Text strong style={{ color: '#1890ff' }}>
                            Note:
                        </Text>
                        <Paragraph
                            editable={{
                                onChange: (value) => handleEdit('note', value),
                            }}
                            style={{ marginBottom: '20px' }}
                        >
                            {quizData.note}
                        </Paragraph>

                        {/* Editable Duration */}
                        <Text strong style={{ color: '#1890ff' }}>
                            Duration (minutes):
                        </Text>
                        <Input
                            type="number"
                            value={quizData.duration}
                            onChange={(e) => handleEdit('duration', e.target.value)}
                            style={{ width: '100%', marginBottom: '20px' }}
                        />


                        {/* Editable Category */}
                        <Text strong style={{ color: '#1890ff' }}>
                            Category:
                        </Text>
                        <Select
                            value={quizData.category}
                            onChange={(value) => handleEdit('category', value)}
                            style={{ width: '100%', marginBottom: '20px', marginTop:'8px' }}
                        >
                            {categories.map((category) => (
                                <Option key={category} value={category}>
                                    {category}
                                </Option>
                            ))}
                        </Select>
                        <Paragraph strong>
                            <span style={{ color: '#1890ff' }}>Questions Amount: </span>{quizData.questionAmount}
                        </Paragraph>
                        {/* Price Option */}
                        <Text strong style={{ color: '#1890ff' }}>
                            Price:
                        </Text>
                        <Radio.Group
                            onChange={(e) => handleEdit('priceOption', e.target.value)}
                            value={quizData.priceOption}
                            style={{ display: 'block', marginBottom: '20px' }}
                        >
                            <Radio value="free">Free</Radio>
                            <Radio value="paid">Paid</Radio>
                        </Radio.Group>

                        {/* Conditional Fields for Paid */}
                        {quizData.priceOption === 'paid' && (
                            <Space direction="vertical" style={{ width: '100%' }}>
                                <Text strong style={{ color: '#1890ff' }}>
                                    Enter Price:
                                </Text>
                                <Paragraph
                                    editable={{
                                        onChange: (value) => handleEdit('price', value),
                                    }}
                                    style={{ marginBottom: '10px' }}
                                >
                                    {quizData.price || 'Enter price here.'}
                                </Paragraph>

                                <Text strong style={{ color: '#1890ff' }}>
                                    Payment Info:
                                </Text>
                                <Paragraph
                                    editable={{
                                        onChange: (value) => handleEdit('paymentInfo', value),
                                    }}
                                    style={{ marginBottom: '20px' }}
                                >
                                    {quizData.paymentInfo || 'Enter payment information here.'}
                                </Paragraph>
                            </Space>
                        )}
                    </Card>
                    {/* Submit Button */}
                    <Button
                        type="primary"
                        onClick={() => console.log('Quiz Data:', quizData)}
                        style={{ width: '100%', marginTop: '12px' }}
                        disabled={!isFormValid()} 
                    >
                        Save Quiz
                    </Button>
                </Col>
                <Col span={16}>
                    <Card
                        width={'100%'}
                        title={
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: "#1890ff" }}>Quizz Information</span>
                                <Button type='primary'
                                onClick={addNewQuestion}
                                >Add new Question</Button>
                            </div>}>
                        {questions.map((questionData, index) => (
                            <Question
                                key={index}
                                questionNumber={questions.length - index} 
                                questionData={questionData}
                                onEdit={(key, value) => handleQuestionEdit(index, key, value)}
                                onDelete={() => handleDeleteQuestion(index)}

                            />
                        ))}
                          <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={questions.length}
                            onChange={handlePageChange}
                            style={{ textAlign: 'center', marginTop: '20px' }}
                        />
                    </Card>
                </Col>
            </Row>


        </div>
    );
};

export default QuizCreate;
