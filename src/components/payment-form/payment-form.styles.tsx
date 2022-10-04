import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: solid green 2px;
  margin-top: 40px;

  @media screen and (max-width: 800px) {
    height: 250px;
  }
`;

export const FormContainer = styled.form`
  height: 200px;
  min-width: 500px;

  @media screen and (max-width: 800px) {
    min-width: 80vw;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-right: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;
