import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Container from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Cards />
      <Footer />
    </Container>
  );
}

export default Home;
