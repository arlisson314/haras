import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  font-size: 0.7rem;
  display: flex;
  height: 300px;
  width: 220px;
  >img {
    object-fit: contain;
    width: 100%;
  }

  > div {
    justify-content: flex-start;
    flex-direction: column;
    display: flex;
    padding: 10px;
    width: 100%;
    height: 70%;
  }

  > button {
    background-color: transparent;
    transition: ease-out 0.5s;
    border: 1px solid var(--secundary);
    margin-bottom: 15px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    padding: 0 .5ch;
    height: 20%;
    width: auto;
    &:hover {
      background: var(--primary)
    }
  }
`;

export default Container;
