import TextField from "../../Input/TextField";
import styled from "styled-components";

const Input = styled(TextField)`
  width: 90px;
  background-color: white;
  @media screen and (max-width: 350px) {
    width: 70px;
  }
`;

export default Input;
