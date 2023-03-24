import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 390px;
  background-color: var( --font);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  >img {
    object-fit: contain;
    width: 98%;
    margin-top: 3px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 70%;
    padding: 10px;
  }

  > button {
    width: 80%;
    height: 15%;
    background-color: var(--primary);
    margin-bottom: 15px;
  }
`;

export default Container;
