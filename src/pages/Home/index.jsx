import Footer from '../../components/Footer';
import Header from '../../components/Header';
import img from '../../assets/img-sem-fundo.png';

import Container from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <section>
        <h1>Haras YahWeh </h1>
        <img src={img} alt="marchador" />
      </section>
      <Footer />
    </Container>
  );
}

export default Home;
