import styled from 'styled-components';
import img from '../../assets/footer-yahweh.png';

export const Container = styled.footer`
  display: flex;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  height: 100px;
  background-image: url(${img});

  p {
    color: #f1f2f3;
    font-size: 15px;
    font-weight: 500;
    margin: 20px 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
`;

export default Container;
