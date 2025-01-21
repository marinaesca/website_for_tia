import { StoreArtItem } from "../types";

async function addStoreArtItem(
  csrfToken: string,
  storeArtItem: StoreArtItem,
): Promise<Response> {
  const url = "/api/store_art_items/";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(storeArtItem),
    });

    if (!response.ok) {
      throw new Error("Failed to add StoreArtItem");
    }

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default addStoreArtItem;
