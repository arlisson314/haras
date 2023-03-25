import { Link } from 'react-router-dom';
import useScroll from '../../hooks/useScroll';
import logo from '../../assets/logo-branca-fundo-transparente.png';
import Container from './styles';

function Header() {
  return (
    <Container scrollValue={useScroll()}>
      <Link to="/">
        <img src={logo} alt="logo do haras" />
      </Link>
      <nav>
        <Link to="/">
          Inicío
        </Link>
        <Link to="/">
          Sobre
        </Link>
        <Link to="/galeria">
          Galeria
        </Link>
        <Link to="/">
          Notícias
        </Link>
        <Link to="/">
          Contato
        </Link>
      </nav>
    </Container>
  );
}

export default Header;
