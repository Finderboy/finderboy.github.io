import React from 'react';
import { Layout, Typography, Card, Button } from '@arco-design/web-react';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;

const DetailsPage = () => {
  const { state } = useLocation();
  const { meal } = state || {};
  const navigate = useNavigate();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 20px', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <Button type='secondary' onClick={() => navigate('/')} style={{ borderRadius: '8px' }}>
          返回
        </Button>
        <Title style={{ margin: 0 }}>菜单详情</Title>
      </Header>
      <Content style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {meal && (
          <Card style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={meal.image} alt={meal.name} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
            <Title heading={4} style={{ marginTop: '20px' }}>{meal.name}</Title>
            <p style={{ marginTop: '10px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{meal.description}</p>
          </Card>
        )}
      </Content>
    </Layout>
  );
};

export default DetailsPage;
