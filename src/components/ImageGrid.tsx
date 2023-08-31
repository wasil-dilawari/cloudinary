// "use client";

import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

export default function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imagedata: SearchResult) => ReactNode;
}) {
  const maxColumns = 4;

  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % maxColumns === colIndex);
  }

  return (
    <div className=" grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div className=" flex flex-col gap-4" key={idx}>
            {column.map(getImage)}
          </div>
        )
      )}
    </div>
  );
}
