import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
  display: flex;
  width: 220px;
  height: 300px;
  >img {
    object-fit: contain;
    width: 98%;
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
    background-color: var(--primary);
    margin-bottom: 15px;
    height: 15%;
    width: 80%;
  }
`;

export default Container;
