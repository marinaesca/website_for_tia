import React, { useState, useEffect } from "react";
import { GalleryDisplayArtItem } from "../../types";
import BasicCard from "../../components/BasicCard/BasicCard";
import Navigation from "../../components/Navigation/Navigation";
import * as S from "./GalleryPage.styles";

interface GalleryPageProps {
  preview?: boolean;
}

function GalleryPage({
  preview = false,
}: GalleryPageProps): React.ReactElement {
  const [displayArtData, setDisplayArtData] = useState([]);

  const getData = async () => {
    const displayArtResponse = await fetch("/display_art_items");
    const displayArtData = await displayArtResponse.json();
    if (preview) {
      setDisplayArtData(displayArtData.slice(0, 3));
    } else {
      setDisplayArtData(displayArtData);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("preview value === ", preview);

  return (
    <>
      {!preview && <Navigation />}
      <S.Container $preview={preview}>
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
              preview={preview}
            />
          ))}
        </S.Grid>
      </S.Container>
    </>
  );
}

export default GalleryPage;
