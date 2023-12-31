// GalleryPage.tsx

import React, { useState, useEffect } from "react";
import BasicCard from "../../components/BasicCard/BasicCard";
import * as S from "./GalleryPage.styles";
import { ArtItem } from "../../types";

function GalleryPage(): React.ReactElement {
  const [displayArtData, setDisplayArtData] = useState([]);

  const getData = async () => {
    const displayArtResponse = await fetch("/display_art_items");
    const displayArtData = await displayArtResponse.json();
    setDisplayArtData(displayArtData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title> The Gallery ~ </S.Title>
        <S.Description>
          Check out my wife's cool art she has created
        </S.Description>
      </S.Header>

      <S.Grid>
        {displayArtData.map((artItem: ArtItem) => (
          <BasicCard
            key={artItem.id}
            title={artItem.title}
            description={artItem.description}
            image={artItem.image}
          />
        ))}
      </S.Grid>
    </S.Container>
  );
}

export default GalleryPage;
