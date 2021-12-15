import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: red;
      font-size: 14px;
    }
  }
`;

export const InputContainer = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  border: 2px solid #666360;
  color: #666360;
  padding: 1rem;
  width: 300px;
  display: flex;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
      svg {
        color: red;
      }
    `}
  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: #312e38;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 1rem;
  }

  @media (max-width: 500px) {
    width: 60vw;
  }
`;