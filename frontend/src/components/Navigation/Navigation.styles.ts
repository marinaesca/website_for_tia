import styled from "styled-components";

export const Nav = styled.ul`
  display: flex;
  background-color: darkcyan;
  cursor: pointer;
`;

export const NavItem = styled.li`
  margin: 1rem;
  font-size: 1.5rem;
  color: cornsilk;
  transition: color 0.3s ease;
  text-shadow: 1px 1px 2px black;

  &:hover {
    color: darkslategrey;
  }
`;
