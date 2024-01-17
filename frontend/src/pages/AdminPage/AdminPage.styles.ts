import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0f8ff;
  border-radius: 1.25rem;
  padding: 2rem;
  margin: 2rem;
`;

export const SubNavigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const TabButton = styled.button<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  text-weight: bold;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ selected }) =>
    selected ? "cornflowerblue" : "lightblue"};
  color: black;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
  }
`;
