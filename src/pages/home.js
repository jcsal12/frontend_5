import React, { useState } from 'react';
import MyCard from 'components/escool/MyCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLibros } from 'hooks/useLibros';
import Carrusel from 'components/escool/Carrusel';
import Cartel from 'components/escool/Cartel';
import BarraNavegacion from 'components/escool/BarraNavegacion';
import Footer from 'components/escool/Footer';

export default function Home() {
  const { data, loading } = useLibros();

  function muestratarjetas(item) {
    return <MyCard key={item.id} item={item.attributes} />;
  }
  return (
    <div>
      <Container fluid >
        <BarraNavegacion />
        <Carrusel />
        <Cartel />
        <Row xs={1} sm={2} md={3} lg={4} className="g-4" >
          {loading ? <p>Cargando...</p> : data.map(muestratarjetas)}
        </Row>
        <Footer></Footer>
      </Container>
    </div>
  );
}
