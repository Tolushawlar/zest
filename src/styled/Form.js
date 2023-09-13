import styled from "styled-components";

export const FormElement = styled.form`
  background-color: hsl(50, 33%, 25%);
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  input {
    border: none;
    width: 250px;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    outline-width: 0;
  }

  button {
    margin-top: 20px;
    width: 200px !important;
    font-size: 16px;
  }

  button:hover {
    background-color: white;
    color: #6c63ff;
    font-weight: 400;
  }
`;
