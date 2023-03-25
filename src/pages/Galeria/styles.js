import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--tertiary);
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  margin-top: 5em;
  display: flex;

  >section {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    >div {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      display: flex;
      height: 200px;
      width: 80%;
      >h1 {
        color: var(--secundary);
        line-height: 50px;
        font-weight: 400;
        font-size: 35px;
      }
      >div {
        justify-content: center;
        align-items: center;
        display: flex;
        height: 20%;
        width: 40%;
        gap: 1ch;
        >button {
          border: 1px solid var(--secundary);
          background-color: transparent;
          transition: ease-out 0.5s;
          border-radius: 4px;
          cursor: pointer;
          padding: 0 .5ch;
          width: auto;
          height: 95%;
          &:hover {
            background-color: var(--primary);
          }
        }
      }
    }
    >main {
      /* background-color: #f5f5f5; */
      justify-content: center;
      align-items:center;
      margin-bottom: 2ch;
      flex-wrap: wrap;
      display: flex;
      width: 80%;
      gap: 2ch;
    }
  }
  overflow-y: hidden;
`;

export default Container;
