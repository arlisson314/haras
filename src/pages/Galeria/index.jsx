// import axios from 'axios';
// import { useEffect } from 'react';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Container from './styles';

function Galeria() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   function getData() {
  //     axios.get('http://localhost:3000/horses')
  //       .then((response) => console.log(response))
  //       .catch();
  //   }
  //   getData();
  // }, []);

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
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </main>
      </section>
      <Footer />
    </Container>
  );
}

export default Galeria;
