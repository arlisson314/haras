import styled from 'styled-components';
import img from '../../assets/header-yahweh.jpg';

const Container = styled.header`
  background-image: url(${img});
  justify-content: space-around;
  background-size: cover;
  align-items: center;
  display: flex;
  height: 80px;
  width: 100%;
  >a {
    justify-content: center;
    display: flex;
    height: 150%;
    width: 15%;
    >img {
      height: 100%;
      padding-bottom: 6px;
    }
  }
  >nav {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    width: 80%;
    gap: 4ch;
      >a {
        transition: ease-out 0.2s;
        justify-content: center;
        text-decoration: none;
        align-items: center;
        color: var(--font);
        font-weight: 700;
        display: flex;
        height: 50%;
        width: 10%;
        &:hover {
        border: 2px solid var(--primary);
        color: var(--primary);
        border-radius: 5px;
      }
    }
  }
`;
export default Container;
