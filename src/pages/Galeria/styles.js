import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  >section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    >div {
      width: 80%;
      height: 35%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border: 2px solid green;
      div {
        height: 25%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    >main {
      height: 700px;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items:center;
      border: 2px solid red;
    }
  }
`;

export default Container;
