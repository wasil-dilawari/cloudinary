"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
import { Heart } from "lucide-react";
import { setFavouriteAction } from "@/lib/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "@/app/gallery/page";

export default function CloudinaryImage(
  props: {
    imagedata: SearchResult;
    // path: string;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();

  const { imagedata, onUnheart } = props;

  const [isFavourite, setIsFavourite] = useState(
    imagedata.tags.includes("favourite")
  );
  return (
    <div className=" relative">
      <CldImage
        {...props}
        src={imagedata.public_id}
        alt="Image Description "
        width="400"
        height="300"
      />
      {isFavourite ? (
        <Heart
          className=" absolute top-2 right-2 fill-red-500 text-red-500 hover:fill-none hover:text-white cursor-pointer"
          onClick={() => {
            onUnheart?.(imagedata);
            setIsFavourite(false);
            startTransition(() => {
              setFavouriteAction(imagedata.public_id, false);
            });
          }}
        />
      ) : (
        <Heart
          className=" absolute top-2 right-2 hover:text-red-500 hover:fill-red-500 cursor-pointer"
          onClick={() => {
            setIsFavourite(true);
            startTransition(() => {
              setFavouriteAction(imagedata.public_id, true);
            });
          }}
        />
      )}
    </div>
  );
}
