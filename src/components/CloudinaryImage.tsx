"use client";

import { CldImage } from "next-cloudinary";
import { Heart } from "lucide-react";
import { setFavouriteAction } from "@/lib/actions";
import { useTransition } from "react";
import { SearchResult } from "@/app/gallery/page";

export default function CloudinaryImage(
  props: any & { imageData: SearchResult; path: string }
) {
  const { imageData } = props;
  const [transition, startTransition] = useTransition();
  const isFavourite = imageData.tags.includes("favourite");
  return (
    <div className=" relative">
      <CldImage
        {...props}
        src={imageData.public_id}
        alt="Image Description "
        width="400"
        height="300"
      />
      {isFavourite ? (
        <Heart
          className=" absolute top-2 right-2 fill-red-500 text-red-500 hover:fill-none hover:text-white cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setFavouriteAction(imageData.public_id, false, props.path);
            });
          }}
        />
      ) : (
        <Heart
          className=" absolute top-2 right-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setFavouriteAction(imageData.public_id, true, props.path);
            });
          }}
        />
      )}
    </div>
  );
}
