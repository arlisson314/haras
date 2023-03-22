import styled from 'styled-components';
import img from '../../assets/footer-yahweh.jpg';

export const Container = styled.footer`
  display: flex;
  text-align: center;
  padding: 10px 0;
  border: 2px solid red;
  width: 100%;
  height: 100px;
  background-image: url(${img});

  p {
    color: #888;
    border: 2px solid blue;
  }

  a{
    color: #888;
    border: 2px solid green;
    text-decoration: none;
  }
`;

export default Container;
