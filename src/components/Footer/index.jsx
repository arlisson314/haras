/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container } from './styles';

const iconeProps = {
  size: 40,
  color: '#e3a403',
};

function Footer() {
  return (
    <Container>
      <div>
        <Link to="/">
          <FaInstagram {...iconeProps} />
        </Link>
        <Link to="/">
          <FaYoutube {...iconeProps} />
        </Link>
      </div>
      <p>Copyright © 2021. All rights reserved.</p>
    </Container>
  );
}

export default Footer;
