import React from "react";
import * as S from "./Title.styles";

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps): React.ReactElement {
  return <S.TitleText>{text}</S.TitleText>;
}

export default Title;
