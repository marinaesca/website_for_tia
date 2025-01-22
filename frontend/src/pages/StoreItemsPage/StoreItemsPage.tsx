import React, { useState, useEffect } from "react";
import { StoreArtItem } from "../../types";
import BasicCard from "../../components/BasicCard/BasicCard";
import Navigation from "../../components/Navigation/Navigation";
import * as S from "./StoreItemsPage.styles";

interface StoreItemsPageProps {
  preview?: boolean;
}

function StoreItemsPage({
  preview = false,
}: StoreItemsPageProps): React.ReactElement {
  const [storeArtData, setStoreArtData] = useState([]);

  const getData = async () => {
    const storeArtResponse = await fetch("/store_art_items");
    const storeArtData = await storeArtResponse.json();
    if (preview) {
      setStoreArtData(storeArtData.slice(0, 3));
    } else {
      setStoreArtData(storeArtData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("preview value === ", preview);

  return (
    <>
      {!preview && <Navigation />}
      <S.Container $preview={preview}>
        <S.Header>
          <S.Title> Theoretically For Sale </S.Title>
          <S.Description>
            Handmade by my wife! From her brain thoughts!{" "}
          </S.Description>
        </S.Header>

        <S.Grid>
          {storeArtData.map((artItem: StoreArtItem) => (
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

export default StoreItemsPage;
