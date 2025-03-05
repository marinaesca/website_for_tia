import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Title from "../../components/Title/Title";
// import AdminAddArtItem from "../../components/AdminAddArtItem/AdminAddArtItem";
import AdminAddModifyArtItem from "../../components/AdminAddModifyArtItem/AdminAddModifyArtItem";
import * as S from "./AdminPage.styles";

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
            <AdminAddModifyArtItem crudType="add" />
          </div>
        ) : (
          <div>{<AdminAddModifyArtItem crudType="modify" />}</div>
        )}
      </S.Container>
    </>
  );
}

export default AdminPage;
