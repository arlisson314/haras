import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: var(--bgCard);
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  /* font-size: 0.7rem; */
  display: flex;
  height: 380px;
  width: 280px;
  >img {
    object-fit: contain;
    width: 100%;
  }

  >div {
    justify-content: flex-start;
    flex-direction: column;
    display: flex;
    padding: 10px;
    width: 100%;
    height: 70%;
  }

  >button {
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

  >section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 15%;
    background: white;
  }
  
  >section {
    display: flex;
    
    >div {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--tertiary);
      width: 33.3%;
      height: 100%;

      >p {
        font-size: 10px;
        color: var(--secundary);
        >span {
          color: var(--infoCards);
          margin: 1px;
        }
      }
    }
  }

  >div {
    display: flex;
    justify-content: center;
    text-align: center;
    >h2 {
      color: var(--infoCards);
      font-size: 10px;
    }
    >span {
      color: var(--infoCards);
    }
  }
`;

export default Container;
