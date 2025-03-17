import React from 'react';
import { Layout, Typography, Tabs, Carousel, Card } from '@arco-design/web-react';
import { weeklyRecipes } from '../data/weeklyRecipes';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;
const TabPane = Tabs.TabPane;

const HomePage = () => {
  const navigate = useNavigate();

  const handleMealClick = (meal) => {
    navigate('/details', { state: { meal } });
  };

  return (
    <Layout>
      <Header style={{ padding: '0 20px', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <Title style={{ margin: 0 }}>媛媛的菜单</Title>
      </Header>
      <Content style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Tabs defaultActiveTab='0' style={{ marginBottom: '20px' }} tabBarStyle={{ backgroundColor: '#fff', padding: '0 20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          {weeklyRecipes.map((day, index) => (
            <TabPane key={index} title={day.day}>
              <Carousel style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }} autoPlay={false} arrowClassName='custom-arrow' indicatorPosition='bottom' indicatorType='line'>
                {day.meals.map((meal, i) => (
                  <Card key={i} style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', cursor: 'pointer', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.02)' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} onClick={() => handleMealClick(meal)}>
                    <img src={meal.image} alt={meal.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                    <Title heading={5} style={{ marginTop: '10px' }}>{meal.name}</Title>
                    <p style={{ marginTop: '10px', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>{meal.description}</p>
                  </Card>
                ))}
              </Carousel>
            </TabPane>
          ))}
        </Tabs>
      </Content>
    </Layout>
  );
};

export default HomePage;
