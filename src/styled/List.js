import styled from "styled-components";

export const ListView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 90vw;
  align-items: flex-start;

  .listView__list {
    background-color: rgba(255, 255, 128, 0.5);
    width: 750px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  svg {
    cursor: pointer;
  }

  .listView__details {
    background-color: hsl(50, 33%, 25%);
    width: 500px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;
