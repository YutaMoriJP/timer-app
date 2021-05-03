import styled, { css } from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  gap: 20px;
  padding: 50px;
  border-radius: 5px;
  border: ${({ running }) =>
    running ? "3px solid #087f5b" : "3px solid #adb5bd"};
  @media screen and (max-width: 450px) {
    padding: 16px;
  }
  ${({ over }) =>
    over &&
    css`
      border: 3px solid #e03131;
    `}
`;

export default Article;
