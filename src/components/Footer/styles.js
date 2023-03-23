import styled from 'styled-components';
import img from '../../assets/footer-yahweh.png';

export const Container = styled.footer`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  height: 100px;
  background-image: url(${img});

  >span {
    margin-top: 10px;
    color: var(--tertiary);
    font-size: 15px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;

    >a {
      margin-top: 10px;
      color: var(--font);
      font-size: 35px;
    }

    >a:hover {
      color: var(--primary);
    }
  }
`;

export default Container;
