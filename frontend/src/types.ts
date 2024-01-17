// TODO: move reused types here

// ArtType Enum
export enum ArtType {
  CEMENT = "CEMENT",
  PHOTOGRAPHY = "PHOTOGRAPHY",
  EMBROIDERY = "EMBROIDERY",
  POTTERY = "POTTERY",
  USER_ART = "USER_ART",
}

// DisplayArtItem interface
export interface DisplayArtItem {
  id: number;
  artType: ArtType;
  title: string;
  description: string;
  image: string; // url
}

export interface GalleryDisplayArtItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

// StoreArtItem interface
export interface StoreArtItem {
  id: number;
  artType: ArtType;
  title: string;
  description: string;
  image: string; // url
  price: number;
  quantity: number;
  weightLbs: number;
}

// UserArtItem interface
export interface UserArtItem {
  id: number;
  artType: ArtType;
  image: string; // url
  token: string;
}
