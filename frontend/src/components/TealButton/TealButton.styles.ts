import styled from "styled-components";

export const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 1.25rem;
  border: none;
  font-size: medium;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 4rem;

  &:hover {
    background-color: darkcyan;
  }
`;
