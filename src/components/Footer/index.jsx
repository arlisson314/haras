/* eslint-disable react/jsx-props-no-spreading */
// import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container } from './styles';

const iconeProps = {
  size: 30,
  color: '#fff',
};

function Footer() {
  return (
    <Container>
      <p>Copyright © 2021. All rights reserved.</p>
      <span>
        <FaInstagram {...iconeProps} />
      </span>
      <span>
        <FaYoutube {...iconeProps} />
      </span>
    </Container>
  );
}

export default Footer;
