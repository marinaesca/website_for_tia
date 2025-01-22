import React from "react";
import * as S from "./BasicCard.styles";

interface Props {
  title?: string;
  description: string;
  image: string;
  preview?: boolean;
}

function BasicCard({ title, description, image, preview = false }: Props) {
  return (
    <S.BasicCardContainer className="border rounded-md p-3 shadow">
      {title && (
        <h3 className="text-lg border-b-2 border-slate-300 text-slate-800">
          {" "}
          {title}
        </h3>
      )}
      <h5 className="py-5">
        <S.CardFormattedImage alt="art" className="rounded-xs" src={image} />
      </h5>
      <S.DescriptionText className="text-gray-500" preview={preview}>
        {description}
      </S.DescriptionText>
    </S.BasicCardContainer>
  );
}

export default BasicCard;
