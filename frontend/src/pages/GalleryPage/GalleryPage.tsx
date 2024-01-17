import React, { useState, useEffect } from "react";
import { GalleryDisplayArtItem } from "../../types";
import BasicCard from "../../components/BasicCard/BasicCard";
import Navigation from "../../components/Navigation/Navigation";
import * as S from "./GalleryPage.styles";

interface GalleryPageProps {
  preview?: boolean;
}

// TODO: add optional rendering of only 3 square if preview mode is on

function GalleryPage({
  preview = false,
}: GalleryPageProps): React.ReactElement {
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
    <>
      {!preview && <Navigation />}
      <S.Container>
        <S.Header>
          <S.Title> The Gallery ~ </S.Title>
          <S.Description>
            Check out my wife's cool art she has created
          </S.Description>
        </S.Header>

        <S.Grid>
          {displayArtData.map((artItem: GalleryDisplayArtItem) => (
            <BasicCard
              key={artItem.id}
              title={artItem.title}
              description={artItem.description}
              image={artItem.image}
            />
          ))}
        </S.Grid>
      </S.Container>
    </>
  );
}

export default GalleryPage;
