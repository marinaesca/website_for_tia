import styled from "styled-components";

export const BasicCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardFormattedImage = styled.img`
  max-width: 15.625rem;
  max-height: 18.75rem;
`;

export const DescriptionText = styled.p<{ preview: boolean }>`
  ${({ preview }) =>
    preview &&
    `
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
  `}
`;
