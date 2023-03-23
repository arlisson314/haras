/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <div>
        <Link to="/">
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
