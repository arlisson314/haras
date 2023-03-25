import { FaVenusMars, FaHorseHead } from 'react-icons/fa';
import { IoMdCalendar } from 'react-icons/io';
import Container from './styles';
import img from '../../assets/img_horse002.jpg';

function Cards() {
  return (
    <Container>
      <img src={img} alt="horse" />
      <section>
        <span>
          <FaVenusMars />
          Ops
        </span>
        <span>
          <FaHorseHead />
          Ops
        </span>
        <span>
          <IoMdCalendar />
          Ops
        </span>
      </section>

      <div>
        <h2>Cavalito Marchador</h2>
        <span>Genealogia: Cavalão Papai</span>
        <span>
          <IoMdCalendar />
          12/02/2021
        </span>
      </div>
      <button type="button">Informações</button>
    </Container>
  );
}

export default Cards;
// FaVenusMars
