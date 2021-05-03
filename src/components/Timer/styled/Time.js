import styled from "styled-components";

const Time = styled.h1`
  font-size: 2.2rem;
  margin: 10px;
  color: ${({ active }) => (active ? "#212529" : "#adb5bd")};
`;

export default Time;
