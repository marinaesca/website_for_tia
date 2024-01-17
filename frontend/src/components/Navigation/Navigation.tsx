import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Navigation.styles";

// Notes:
// Could optionally add sticky option to outer div to make it follow when scrolling

function Navigation(): React.ReactElement {
  return (
    <nav>
      <S.Nav>
        <S.NavItem as={Link} to="/">
          | Tia bo bia pia |
        </S.NavItem>
        <S.NavItem as={Link} to="/gallery">
          Display Art
        </S.NavItem>
        <S.NavItem>Store Art</S.NavItem>
        <S.NavItem>User Art</S.NavItem>
      </S.Nav>
    </nav>
  );
}

export default Navigation;
