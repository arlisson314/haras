import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Carrossel from '../../components/Carrossel';

import Container from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Carrossel />
      <Footer />
    </Container>
  );
}

export default Home;
