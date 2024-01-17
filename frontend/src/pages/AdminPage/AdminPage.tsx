import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Title from "../../components/Title/Title";
import AdminAddArtItem from "../AdminAddArtItem/AdminAddArtItem";
import * as S from "./AdminPage.styles";

// export interface GalleryDisplayArtItem {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }
// export interface StoreArtItem {
//   id: number;
//   artType: ArtType;
//   title: string;
//   description: string;
//   image: string; // url
//   price: number;
//   quantity: number;
//   weightLbs: number;
// }

function AdminPage(): React.ReactElement {
  const [view, setView] = useState<"add" | "modify">("add");

  return (
    <>
      <Navigation />
      <S.Container>
        <Title text="Welcome to the shadow realm" />
        <S.SubNavigation>
          <S.TabButton selected={view === "add"} onClick={() => setView("add")}>
            Add
          </S.TabButton>
          <S.TabButton
            selected={view === "modify"}
            onClick={() => setView("modify")}
          >
            Modify Existing Inventory
          </S.TabButton>
        </S.SubNavigation>
        {view === "add" ? (
          <div>
            <AdminAddArtItem />
          </div>
        ) : (
          <div>{/* Add your "modify" view content here */}</div>
        )}
      </S.Container>
    </>
  );
}

export default AdminPage;
