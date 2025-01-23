import React from 'react';
import { Typography, Space, Divider, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

const Question = ({ questionData, questionNumber, onEdit, onDelete }) => {
    const handleEdit = (key, value) => {
        if (onEdit) {
            onEdit(key, value);
        }
    };

    return (
        <div style={{ padding: '12px', border: '1px solid #1890ff', borderRadius: '4px', marginBottom: '16px' }}>
            {/* Question */}
            <Space style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text strong style={{ color: '#1890ff' }}>
                    Question {questionNumber}:
                </Text>
                <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={onDelete}
                />
            </Space>
            <Paragraph
                editable={{
                    onChange: (value) => handleEdit('question', value),
                }}
                style={{ marginBottom: '16px' }}
            >
                {questionData.question || 'Enter your question here.'}
            </Paragraph>

            <Divider />

            {/* Answer Options */}
            <Space direction="vertical" style={{ width: '100%' }}>
                <div key={0}>
                    <Text strong style={{ color: '#1890ff' }}>
                        Correct Option:
                    </Text>
                    <Paragraph
                        editable={{
                            onChange: (value) => handleEdit(`option${0}`, value),
                        }}
                        style={{ marginBottom: '8px' }}
                    >
                        {questionData[`option${0}`] || `Enter answer option ${0}`}
                    </Paragraph>
                </div>
                {[...Array(3)].map((_, index) => (
                    <div key={index}>
                        <Text strong style={{ color: '#1890ff' }}>
                            Option {index + 2}:
                        </Text>
                        <Paragraph
                            editable={{
                                onChange: (value) => handleEdit(`option${index + 1}`, value),
                            }}
                            style={{ marginBottom: '8px' }}
                        >
                            {questionData[`option${index + 1}`] || `Enter answer option ${index + 1}`}
                        </Paragraph>
                    </div>
                ))}
            </Space>
        </div>
    );
};

export default Question;
