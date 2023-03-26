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
            <span>Fêmea</span>
          </p>
        </div>

        <div>
          <p>
            <FaHorseHead />
            <span>Fêmea</span>
          </p>
        </div>

        <div>
          <p>
            <IoMdCalendar />
            <span>12/02/2021</span>
          </p>
        </div>

      </section>

      <div>
        <span><strong>POTRO D. OURO VERDE</strong></span>
        <span>(x) anos e (x) meses</span>
        <span>(pai) xxx (mãe) xxx</span>
      </div>
      <button type="button">Informações</button>
    </Container>
  );
}

export default Cards;
// FaVenusMars
