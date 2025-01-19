import React from 'react'
import { Avatar, Card, Tag, Typography, Button, Tooltip } from 'antd'
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;

const Quizz = (props) => {
    const { title, time, author, price, id,attempts } = props;

    return (
        <Card
            hoverable style={{ width: '100%', margin: '10px 0' }}>

            <Tooltip title={title}>
                <Title
                    style={{
                        margin: '2px',
                        lineHeight: '1.2',
                        maxHeight: '2.4em',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2
                    }}
                >
                    {title}
                </Title>
            </Tooltip>
            <div>
                <Tag color="processing">{time}</Tag>
                <Tag color="success">{price}</Tag>
                <Tag color="warning">{attempts} attempts</Tag>

            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', justifyContent: 'space-between' }}>
                <div>
                    <Avatar
                        size={30}
                        src={author.url || null}
                        icon={!author.url && <UserOutlined />}
                        style={{ marginRight: '8px' }}
                    />
                    <span style={{ fontSize: '14px', color: '#555' }}>{author.name}</span>
                </div>
                <Button type="primary">View details</Button>
            </div>
        </Card>
    )
}

export default Quizz