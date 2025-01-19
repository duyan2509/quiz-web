import React, { useState } from 'react';
import { Input, Col, Row, Radio } from 'antd';
const { Search } = Input;

const AQuizPage = () => {
  const [numFound, setNumFound] = useState(0);
  const [categories, setCategories] = useState([{ key: 1, name: "All", count: 22 }, { key: 2, name: "Math", count: 10 }, { key: 3, name: "OOP", count: 12 }]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [timeSort, setTimeSort] = useState('1'); 
  const [status, setStatus] = useState('pending');

  const onCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const handleChangeTimeSort = (e) => {
    setTimeSort(e.target.value); // Update time sort
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value); // Update status (Pending/Approve)
  };

  return (
    <div>
      <Row>
        <Col style={{ marginTop: '50px' }} span={3}>
          <h3>Categories</h3>
          <Radio.Group
            value={selectedCategory}
            onChange={onCategoryChange}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {categories.map((category) => (
              <Radio style={{ marginTop: "12px" }} key={category.key} value={category.key}>
                {category.name} ({category.count})
              </Radio>
            ))}
          </Radio.Group>
        </Col>
        <Col span={21}>
          <Search
            placeholder=""
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "8px", marginBottom: "8px" }}>
            <div style={{ display: 'flex', justifyContent: "flex-start"}}>
              <Radio.Group
                value={status}
                onChange={handleStatusChange}
                
              >
                <Radio.Button value="pending">Pending</Radio.Button>
                <Radio.Button value="approve">Approve</Radio.Button>
              </Radio.Group>
              <Radio.Group
                value={timeSort}
                onChange={handleChangeTimeSort}
                style={{ marginLeft: '16px' }} 
              >
                <Radio.Button value="1">Latest</Radio.Button>
                <Radio.Button value="2">Oldest</Radio.Button>
              </Radio.Group>

            </div>

            <div style={{ fontSize: "16px" }}>
              <span style={{ color: "#1890ff" }}>{numFound}</span><b > result found</b>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AQuizPage;
