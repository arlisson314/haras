import Container from './styles';
import img from '../../assets/img_horse002.jpg';

function Cards() {
  return (
    <Container>
      <img src={img} alt="horse" />
      <div>
        <h2>Nome do cavalo</h2>
        <span>Genealogia:</span>
        <span>Nascimento:12/02/2021</span>
      </div>
      <button type="button">Informações</button>
    </Container>
  );
}

export default Cards;
