import { FaVenusMars, FaHorseHead } from 'react-icons/fa';
import { IoMdCalendar } from 'react-icons/io';
import Container from './styles';
import img from '../../assets/img_horse002.jpg';

function Cards({
  name, sex, birthdate, father, mother, type,
}) {
  const hoje = new Date();
  const birthDate = new Date(birthdate);
  const diferencaEmMilissegundos = hoje - birthDate;
  const milissegundosDia = 1000 * 60 * 60 * 24;
  const milissegundosEmUmAno = 1000 * 60 * 60 * 24 * 365;

  const anos = Math.floor(diferencaEmMilissegundos / milissegundosEmUmAno);
  const meses = Math
    .floor((diferencaEmMilissegundos % (milissegundosDia * 365)) / (milissegundosDia * 30));
  return (
    <Container>
      <img src={img} alt="horse" />
      <section>
        <div>
          <p>
            <FaVenusMars />
            <span>{sex}</span>
          </p>
        </div>

        <div>
          <p>
            <FaHorseHead />
            <span>{type}</span>
          </p>
        </div>

        <div>
          <p>
            <IoMdCalendar />
            <span>{birthdate}</span>
          </p>
        </div>

      </section>

      <div>
        <h2>{name}</h2>
        <span>
          Idade:
          {' '}
          {String(anos).padStart(2, '0')}
          {' '}
          anos e
          {' '}
          {String(meses).padStart(2, '0')}
          {' '}
          meses
        </span>
        <span>
          Pai:
          {' '}
          {father}
        </span>
        <span>
          Mãe:
          {' '}
          {mother}
        </span>
      </div>

      <button type="button">INFORMAÇÕES</button>
    </Container>
  );
}

export default Cards;
