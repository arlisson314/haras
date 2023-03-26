import { FaVenusMars, FaHorseHead } from 'react-icons/fa';
import { IoMdCalendar } from 'react-icons/io';
import Container from './styles';
import img from '../../assets/img_horse002.jpg';

function Cards() {
  return (
    <Container>
      <img src={img} alt="horse" />
      <section>
        <div>
          <p>
            <FaVenusMars />
            <span>Sexo</span>
          </p>
        </div>

        <div>
          <p>
            <FaHorseHead />
            <span>Tipo</span>
          </p>
        </div>

        <div>
          <p>
            <IoMdCalendar />
            <span>Nasc</span>
          </p>
        </div>

      </section>

      <div>
        <span><strong>NOME DO ANIMAL</strong></span>
        <span>(x) anos e (x) meses</span>
        <span>(pai) xxx (mãe) xxx</span>
      </div>

      <button type="button">INFORMAÇÕES</button>
    </Container>
  );
}

export default Cards;
