import styled from 'styled-components';
import img from '../../assets/footer-yahweh.png';

export const Container = styled.footer`
  background-image: url(${img});
  flex-direction: column;
  text-align: center;
  padding: 10px 0;
  display: flex;
  height: 100px;
  width: 100%;
  >span {
    color: var(--tertiary);
    margin-top: 10px;
    font-size: 15px;
  }

  div {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    gap: 10px;

    >a {
      transition: ease-out 0.4s;
      color: var(--font);
      margin-top: 10px;
      font-size: 35px;
      &:hover {
        color: var(--primary);
      }
    }
  }
`;

export default Container;
