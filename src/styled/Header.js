import styled from "styled-components";

export const HeaderDiv = styled.div`
  background-color: white;
  color: black;
  font-weight: 300;
  padding: 0px 50px;
  display: flex;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 5px #6c63ff;

  .header__buttons {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    width: 150px !important;
  }

  p {
    color: #6c63ff;
    font-family: "Oswald", sans-serif;
    font-size: 28px;
  }
`;
