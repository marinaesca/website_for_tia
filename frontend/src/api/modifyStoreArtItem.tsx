import { StoreArtItem } from "../types";

async function modifyStoreArtItem(
  csrfToken: string,
  storeArtItem: StoreArtItem,
): Promise<Response> {
  const url = "/api/store_art_items/";

  // todo
  return new Response();
}

export default modifyStoreArtItem;
