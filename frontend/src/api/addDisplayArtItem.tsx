import { DisplayArtItem } from "../types";

async function addDisplayArtItem(
  csrfToken: string,
  displayArtItem: DisplayArtItem,
): Promise<Response> {
  const url = "/api/display_art_items/";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(displayArtItem),
    });

    if (!response.ok) {
      throw new Error("Failed to add DisplayArtItem");
    }

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default addDisplayArtItem;
