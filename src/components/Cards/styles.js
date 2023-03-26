import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  background-color: var(--bgCard);
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  font-size: 0.7rem;
  display: flex;
  height: 400px;
  width: 280px;
  >img {
    object-fit: contain;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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
    background-color: var(--tertiary);
    color: var(--infoCards);
    transition: ease-out 0.5s;
    /* border: 1px solid var(--tertiary); */
    /* margin-bottom: 15px; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    /* padding: 0 .5ch; */
    padding: 10px;
    height: 10%;
    /* width: auto; */
    width: 100%;
    margin-bottom: 0;
    &:hover {
      background: var(--primary);
      color: var(--font);
    }
  }

  >section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 12%;
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
    }
    >span {
      color: var(--infoCards);
    }
  }
`;

export default Container;
