import React from "react";
import { LinkProps } from "react-router-dom";
import * as S from "./TealButton.styles";

type TealButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<LinkProps> & { as?: React.ElementType };

function TealButton(props: TealButtonProps) {
  return <S.Button {...props} />;
}

export default TealButton;
