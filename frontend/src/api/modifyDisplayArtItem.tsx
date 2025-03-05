import { DisplayArtItem } from "../types";

async function modifyDisplayArtItem(
  csrfToken: string,
  displayArtItem: DisplayArtItem,
): Promise<Response> {
  const url = "/api/display_art_items/";

  // todo
  return new Response();
}

export default modifyDisplayArtItem;
