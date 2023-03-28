import img from '../../assets/img-sem-fundo.png';
import { Container } from './styles';

function Carrossel() {
  return (
    <Container>
      <h1>Haras YahWeh</h1>
      <img src={img} alt="marchador" />
    </Container>

  );
}

export default Carrossel;
