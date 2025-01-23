import React, { useState } from 'react';
import { Pagination, Input, Col, Row, Radio, Button } from 'antd';
import Quizz from '../../../components/Quizz';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;

const MyQuiz = () => {
  const navigate = useNavigate();
  const [numFound, setNumFound] = useState(0);
  const [categories, setCategories] = useState([{ key: 1, name: "All", count: 22 }, { key: 2, name: "Math", count: 10 }, { key: 3, name: "OOP", count: 12 }]);
  const [costs, setCosts] = useState([{ key: 1, name: "All" }, { key: 2, name: "Free" }, { key: 3, name: "Paid" }])
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedCost, setSelectedCost] = useState(1);
  const [timeSort, setTimeSort] = useState('1');
  const [priceSort, setPriceSort] = useState("Increase");
  const quizData = [
    { id: 1, title: 'Mid-term Math', time: '20mins', author: { name: 'John Doe', url: '' }, price: '30k', attempts: 2 },
    { id: 2, title: 'Science Quiz - Physics', time: '15mins', author: { name: 'Jane Smith', url: '' }, price: '25k', attempts: 3 },
    { id: 3, title: 'History Final Exam', time: '25mins', author: { name: 'Alice Johnson', url: '' }, price: '40k', attempts: 1 },
    { id: 4, title: 'Chemistry Basics', time: '10mins', author: { name: 'Mike Brown', url: '' }, price: '20k', attempts: 4 },
    { id: 5, title: 'Literature Quiz', time: '30mins', author: { name: 'Emily Davis', url: '' }, price: '35k', attempts: 2 },
    { id: 6, title: 'Art and Design', time: '12mins', author: { name: 'Chris Wilson', url: '' }, price: '22k', attempts: 5 },
    { id: 7, title: 'Geography Challenge', time: '18mins', author: { name: 'Anna White', url: '' }, price: '28k', attempts: 3 },
    { id: 8, title: 'Programming Basics', time: '25mins', author: { name: 'David Miller', url: '' }, price: '50k', attempts: 2 },
    { id: 9, title: 'Music Theory Quiz', time: '20mins', author: { name: 'Sophia Lee', url: '' }, price: '30k', attempts: 3 },
    { id: 10, title: 'Economics Final', time: '22mins', author: { name: 'Oliver Harris', url: '' }, price: '32k', attempts: 1 },
  ];


  const onCostChange = (e) => {
    setSelectedCost(e.target.value);
  };
  const onCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const handleChangeTimeSort = (e) => {
    setTimeSort(e.target.value); // Update time sort
  };
  const handleChangePriceSort = (e) => {
    setPriceSort(e.target.value); // Update time sort
  };

  return (
    <div style={{ paddingTop: "20px", paddingInline: "40px" }}>
      <Row>
        <Col style={{ marginTop: '50px' }} span={3}>
          <h3>Cost</h3>
          <Radio.Group
            value={selectedCost}
            onChange={onCostChange}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {costs.map((cost) => (
              <Radio style={{ marginTop: "8px" }} key={cost.key} value={cost.key}>
                {cost.name}
              </Radio>
            ))}
          </Radio.Group>
          <h3 style={{ marginTop: "12px" }}>Categories</h3>
          <Radio.Group
            value={selectedCategory}
            onChange={onCategoryChange}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {categories.map((category) => (
              <Radio style={{ marginTop: "8px" }} key={category.key} value={category.key}>
                {category.name} ({category.count})
              </Radio>
            ))}
          </Radio.Group>
        </Col>
        <Col span={21}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Search
              placeholder=""
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
              style={{marginRight:"8px"}}
            />
            <Button type='primary' size='large' onClick={()=>{
              navigate(`/setup-quizz`)
            }}>
              Add new Quizz
            </Button>
          </div>
          <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "8px", marginBottom: "8px" }}>
            <div style={{ display: 'flex', justifyContent: "flex-start" }}>
              <Radio.Group
                value={timeSort}
                onChange={handleChangeTimeSort}
              >
                <Radio.Button value="1">Latest</Radio.Button>
                <Radio.Button value="2">Oldest</Radio.Button>
              </Radio.Group>
              <Radio.Group
                value={priceSort}
                onChange={handleChangePriceSort}
                style={{ marginLeft: '16px' }}
              >
                <Radio.Button value="decrease">Decrease</Radio.Button>
                <Radio.Button value="increase">Increase</Radio.Button>
              </Radio.Group>

            </div>
            <div style={{ fontSize: "16px" }}>
              <span style={{ color: "#1890ff" }}>{numFound}</span><b > result found</b>
            </div>
          </div>
          <Row gutter={[16, 16]}>
            {quizData.map((quiz) => (
              <Col
                key={quiz.id}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                xl={6}
              >
                <Quizz
                  id={quiz.id}
                  title={quiz.title}
                  time={quiz.time}
                  author={quiz.author}
                  price={quiz.price}
                  attempts={quiz.attempts}
                />
              </Col>
            ))}
          </Row>

          <Pagination style={{ margin: "12px" }} align="center" defaultCurrent={1} total={50} />
        </Col>
      </Row>
    </div>
  );
};

export default MyQuiz;
