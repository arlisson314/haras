import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <div>
        <Link to="https://www.instagram.com/harasyahweh/" target="_blank">
          <FaInstagram />
        </Link>
        <Link to="/">
          <FaYoutube />
        </Link>
      </div>
      <span>Copyright © 2021. All rights reserved.</span>
    </Container>
  );
}

export default Footer;
