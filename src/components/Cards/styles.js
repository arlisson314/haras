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
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    object-fit: contain;
    width: 100%;
  }

  >section {
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background: white;
    min-height: 12%;
    display: flex;
    width: 100%;
    >div {
      border: 1px solid var(--tertiary);
      justify-content: center;
      align-items: center;
      display: flex;
      width: 33.3%;
      height: 100%;
      >p {
        color: var(--secundary);
        >span {
          color: var(--infoCards);
          margin: 0.4ch;
        }
      }
    }
  }

  >div {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    display: flex;
    padding: 10px;
    width: 100%;
    height: 70%;
    >h2 {
      color: var(--infoCards);
    }
    >span {
      color: var(--infoCards);
    }
  }

  >button {
    background-color: var(--tertiary);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: ease-out 0.5s;
    color: var(--infoCards);
    font-weight: bold;
    margin-bottom: 0;
    cursor: pointer;
    padding: 10px;
    height: 10%;
    width: 100%;
    &:hover {
      background: var(--primary);
      color: var(--font);
    }
  }
`;

export default Container;
