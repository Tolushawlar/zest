import styled from "styled-components";

export const DashboardElement = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .dashboard__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 360px;

    button{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
  }
`;
