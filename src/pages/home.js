import React, { useState, useEffect } from 'react';
import MyCard from 'components/escool/MyCard';
import { jsonProvider } from 'services/jsonProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const [data, setData] = useState([]);

  function getProducts() {
    jsonProvider().then((response) => {
      setData(response);
    });
  }

  function muestratarjetas(item) {
    return <MyCard key={item.id} item={item} />;
  }

  useEffect(getProducts, []);
  return (
    <div>
      <h1>Home Page</h1>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4" >
          {data.map(muestratarjetas)}
        </Row>
      </Container>
    </div>
  );
}
