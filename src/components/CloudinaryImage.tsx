"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
import { Heart } from "lucide-react";
import { setFavouriteAction } from "@/lib/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "@/app/gallery/page";
import { ImageMenu } from "./ImageMenu";

export default function CloudinaryImage(
  props: {
    imagedata: SearchResult;
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
        sizes="100vw"
      />
      {isFavourite ? (
        <Heart
          className=" absolute top-2 left-2 fill-red-500 text-red-500 hover:fill-none hover:text-white cursor-pointer"
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
          className=" absolute top-2 left-2 hover:text-red-500 hover:fill-red-500 cursor-pointer"
          onClick={() => {
            setIsFavourite(true);
            startTransition(() => {
              setFavouriteAction(imagedata.public_id, true);
            });
          }}
        />
      )}
      <div className=" absolute top-2 right-2">
        <ImageMenu image={imagedata} />
      </div>
    </div>
  );
}
