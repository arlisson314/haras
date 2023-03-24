import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Container from './styles';

function Galeria() {
  return (
    <Container>
      <Header />
      <section>
        <div>
          <h1>Galeria</h1>
          <div>paginação</div>
        </div>
        <main>
          cards
        </main>
      </section>
      <Footer />
    </Container>
  );
}

export default Galeria;
