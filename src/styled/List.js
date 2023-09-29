import styled from "styled-components";

export const ListView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  width: 90vw;
  align-items: flex-start;

  .listView__list {
    background-color: rgba(255, 255, 128, 0.5);
    width: 600px;
    padding-left: 60px !important;
    display: flex;
    flex-direction: row !important;
    justify-content: flex-start;
    align-items: center;
    text-align: left !important;
    padding: 5px;
    svg {
      margin-left: 20px;
    }
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
    position: absolute;
    left: 1000px;
  }
`;
