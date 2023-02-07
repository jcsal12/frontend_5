import React, {useState, useEffect} from 'react';
import MyCard from 'components/escool/MyCard';
import { jsonProvider } from 'services/jsonProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const [data, setData] = useState([]);

  function getProducts() {
    jsonProvider()
    .then(response => {
      setData(response);
    });
  };

  function muestratarjetas(item) {
    return (
      <MyCard
        key={item.id}
        item={item}
      />
    );
  }

  useEffect(getProducts, []);
  console.log(data);
  return (
    <div>
      <h1>Home Page</h1>
      <Container>
        <Row>
          {data.map(muestratarjetas)}
        </Row>
      </Container> 
    </div>
  );
}