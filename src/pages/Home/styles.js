import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  >section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
    width: 100%;
    min-height: 60%;
    padding: 0 30px;
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

export default Container;
