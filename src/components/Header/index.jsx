import { Link } from 'react-router-dom';
import logo from '../../assets/logo-branca-fundo-transparente.png';
import Container from './styles';

function Header() {
  return (
    <Container>
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
        <Link to="/">
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
