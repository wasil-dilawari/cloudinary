"use server";
import cloudinary from "cloudinary";
import { SearchResult } from "@/lib/types";

export async function setFavouriteAction(
  publicId: string,
  isFavourite: boolean
) {
  if (isFavourite) {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  }
}

export async function addToAlbumAction(image: SearchResult, album: string) {
  await cloudinary.v2.api.create_folder(album);

  let parts = image.public_id.split("/");
  if (parts.length > 1) {
    parts = parts.slice(1);
  }
  const publicId = parts.join("/");

  await cloudinary.v2.uploader.rename(image.public_id, `${album}/${publicId}`);
}

export async function getFoldersAction() {
  return await cloudinary.v2.api.root_folders();
}
