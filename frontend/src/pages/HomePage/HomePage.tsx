import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import BasicCard from "../../components/BasicCard/BasicCard";
import GalleryPage from "../GalleryPage/GalleryPage";
import TealButton from "../../components/TealButton/TealButton";
import * as S from "./HomePage.styles";

// TODO:
// - extract each art types data fetch and rendering to separate files
// - swap out simple API fetch for react query library
// - move each type of art fetching to it's own fetch to dry code
// - add back display art and store art to homepage as preview
// - styles: remove all tailwind and convert to styled

function HomePage(): React.ReactElement {
  // const [displayArtData, setDisplayArtData] = React.useState([]);
  const [storeArtData, setStoreArtData] = React.useState([]);
  const [userArtData, setUserArtData] = React.useState([]);

  const getData = async () => {
    // const displayArtResponse = await fetch("/display_art_items");
    // const displayArtData = await displayArtResponse.json();
    // setDisplayArtData(displayArtData);

    const storeArtResponse = await fetch("/store_art_items");
    const storeArtData = await storeArtResponse.json();
    setStoreArtData(storeArtData);

    const userArtResponse = await fetch("/user_art_items");
    const userArtData = await userArtResponse.json();
    setUserArtData(userArtData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navigation />
      <S.Container>
        <S.Header>
          <S.PageTitle> Test Tester </S.PageTitle>
          <S.PageSubtitle>Art Maker Extraordinaire</S.PageSubtitle>
        </S.Header>

        <S.ProfileSection>
          <S.ProfileImage alt="profile" src="./profile_picture.jpeg" />
          <div>
            <S.ProfileTitle>"I'm Dirty Dan!"</S.ProfileTitle>
            <S.Description>
              Famed for putting on a cowboy hat and exclaiming "I'm Dirty Dan",
              Tia Bo Bia Pia claims to have become cowboy alter ego 'Dirty Dan'.
            </S.Description>
          </div>
        </S.ProfileSection>

        {/* DISPLAY ART SECTION*/}
        <S.ArtSectionContainer>
          {/* TODO: change this into a preview component */}
          <GalleryPage preview={true} />
          <TealButton as={Link} to="/gallery">
            Go to Gallery Page
          </TealButton>
        </S.ArtSectionContainer>

        {/* STORE ART SECTION*/}
        <S.ArtSectionContainer>
          <S.ArtSectionHeader>
            <S.ArtSectionTitle>Store Art</S.ArtSectionTitle>
            <S.ArtSectionSubtitle>
              This is theoretically art that is for sale. It maybe should just
              be in the store section, but that doesn't exist yet so it's here.
              This is cool cement art that comes in variations of grey, white,
              and terrazo.
            </S.ArtSectionSubtitle>
          </S.ArtSectionHeader>
          <S.ArtGrid>
            {storeArtData.map((artItem: any) => (
              <BasicCard
                key={artItem.id}
                title={artItem.title}
                description={artItem.description}
                image={artItem.image}
              />
            ))}
          </S.ArtGrid>
        </S.ArtSectionContainer>

        {/* USER ART SECTION*/}
        <S.ArtSectionContainer>
          <S.ArtSectionHeader>
            <S.ArtSectionTitle>User Art</S.ArtSectionTitle>
            <S.ArtSectionSubtitle>
              This is your art! Well not you, but maybe you? It's the art of our
              users and you can see it here.
            </S.ArtSectionSubtitle>
          </S.ArtSectionHeader>
          <S.ArtGrid>
            {userArtData.map((artItem: any) => (
              <BasicCard
                key={artItem.id}
                title={artItem.title}
                description={artItem.description}
                image={artItem.image}
              />
            ))}
          </S.ArtGrid>
        </S.ArtSectionContainer>
      </S.Container>
    </>
  );
}

export default HomePage;
