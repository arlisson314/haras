import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Container from './styles';

function Galeria() {
  const [data, setData] = useState([]);

  const getData = () => {
    const URL = 'http://localhost:3004/horses';

    axios.get(URL)
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header />
      <section>
        <div>
          <h1>Galeria</h1>
          <div>
            <button type="button">dsfsfsdfdsfsfsfsdfs</button>
            <button type="button">Galeria</button>
            <button type="button">Galeria</button>
            <button type="button">Galeria</button>
          </div>
        </div>
        <main>
          {data && data.map((item) => (
            <Cards key={item.id} {...item} />
          ))}
        </main>
      </section>
      <Footer />
    </Container>
  );
}

export default Galeria;
