import React, { useState } from 'react';
import MyCard from 'components/escool/MyCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLibros } from 'hooks/useLibros';

export default function Home() {
  const { data, loading } = useLibros();

  function muestratarjetas(item) {
    return <MyCard key={item.id} item={item.attributes} />;
  }
  console.log(data);
  return (
    <div>
      <h1>Home Page</h1>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4" >
          {data.map(muestratarjetas)}
        </Row>
      </Container>
    </div>
  );
}
