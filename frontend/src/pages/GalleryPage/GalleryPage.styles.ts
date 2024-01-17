import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0f8ff;
  border-radius: 1.25rem;
  padding: 2rem;
  margin: 2rem;
`;

export const Header = styled.div`
  margin-bottom: 1.25rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: gray;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`;
