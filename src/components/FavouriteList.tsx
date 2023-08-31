"use client";

import { SearchResult } from "@/app/gallery/page";
import CloudinaryImage from "@/components/CloudinaryImage";
import { useEffect, useState } from "react";
import ImageGrid from "./ImageGrid";

export default function FavouritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, SetResources] = useState(initialResources);

  useEffect(() => {
    SetResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid
      images={resources}
      getImage={(imagedata: SearchResult) => {
        return (
          <CloudinaryImage
            imagedata={imagedata}
            width="400"
            height="300"
            alt=""
            key={imagedata.public_id}
            onUnheart={(unheartedResource) => {
              SetResources((currentResources) =>
                currentResources.filter(
                  (resources) =>
                    resources.public_id !== unheartedResource.public_id
                )
              );
            }}
          />
        );
      }}
    />
  );
}
