import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { ArtType, DisplayArtItem, StoreArtItem } from "../../types";
import addDisplayArtItem from "../../api/addDisplayArtItem";
import * as S from "./AdminAddArtItem.styles";

function AdminAddArtItem(): React.ReactElement {
  const [cookies] = useCookies(["authToken"]);
  const [status, setStatus] = useState<string>("");

  const [itemType, setItemType] = useState<"DisplayArtItem" | "StoreArtItem">(
    "StoreArtItem",
  );

  const [displayArtItem, setDisplayArtItem] = useState<DisplayArtItem>({
    id: 0,
    artType: ArtType.CEMENT,
    title: "",
    description: "",
    image: "",
  });
  const [storeArtItem, setStoreArtItem] = useState<StoreArtItem>({
    id: 0,
    artType: ArtType.CEMENT,
    title: "",
    description: "",
    image: "",
    price: 0,
    quantity: 0,
    weightLbs: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (itemType === "DisplayArtItem") {
      setDisplayArtItem({
        ...displayArtItem,
        [e.target.name]: e.target.value,
      });
    } else if (itemType === "StoreArtItem") {
      setStoreArtItem({
        ...storeArtItem,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemType(e.target.value as "DisplayArtItem" | "StoreArtItem");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (itemType === "DisplayArtItem") {
      handleAddDisplayArtItem();
    } else if (itemType === "StoreArtItem") {
      // TODO: submit store art item case
    }
  };

  async function handleAddDisplayArtItem() {
    try {
      const response = await addDisplayArtItem(
        cookies.authToken,
        displayArtItem,
      );
      setStatus(response.ok ? "Success!" : "Failed to add display art item");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.LabelText>
        Art Item Type:
        <S.Select value={itemType} onChange={handleTypeChange}>
          <option value="display">Display Art Item</option>
          <option value="store">Store Art Item</option>
        </S.Select>
      </S.LabelText>

      <S.LabelText>
        Art Medium:
        <S.Select
          name="artType"
          value={
            itemType === "DisplayArtItem"
              ? displayArtItem.title
              : storeArtItem.title
          }
          onChange={handleChange}
        >
          {Object.values(ArtType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </S.Select>
      </S.LabelText>
      <S.LabelText>
        Title:
        <S.TextInput
          name="title"
          value={
            itemType === "DisplayArtItem"
              ? displayArtItem.title
              : storeArtItem.title
          }
          onChange={handleChange}
        />
      </S.LabelText>
      <S.LabelText>
        Description:
        <S.TextInput
          type="text"
          name="description"
          value={
            itemType === "DisplayArtItem"
              ? displayArtItem.description
              : storeArtItem.description
          }
          onChange={handleChange}
        />
      </S.LabelText>
      <S.LabelText>
        Image URL:
        <S.TextInput
          type="text"
          name="image"
          value={
            itemType === "DisplayArtItem"
              ? displayArtItem.image
              : storeArtItem.image
          }
          onChange={handleChange}
        />
      </S.LabelText>
      {itemType === "StoreArtItem" && (
        <>
          <S.LabelText>
            Price:
            <S.TextInput
              type="number"
              name="price"
              value={storeArtItem.price}
              onChange={handleChange}
            />
          </S.LabelText>
          <S.LabelText>
            Quantity:
            <S.TextInput
              type="number"
              name="quantity"
              value={storeArtItem.quantity}
              onChange={handleChange}
            />
          </S.LabelText>
          <S.LabelText>
            Weight (lbs):
            <S.TextInput
              type="number"
              name="weightLbs"
              value={storeArtItem.weightLbs}
              onChange={handleChange}
            />
          </S.LabelText>
        </>
      )}
      <S.SubmitButton type="submit">CREATE! THAT! BAZONKA!</S.SubmitButton>
      {status && <p>{status}</p>}
    </S.Form>
  );
}

export default AdminAddArtItem;
