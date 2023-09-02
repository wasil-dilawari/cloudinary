import CloudinaryImage from "@/components/CloudinaryImage";
import ForceRefresh from "@/components/ForceRefresh";
import ImageGrid from "@/components/ImageGrid";
import UploadBtn from "@/components/buttons/UploadBtn";
import { SearchResult } from "@/lib/types";
import cloudinary from "cloudinary";

export default async function Home() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  // console.log(results);

  return (
    <section className=" flex flex-col gap-8 ">
      {/* <ForceRefresh /> */}

      <div className=" flex justify-between ">
        <h1 className=" text-4xl font-bold">Gallery</h1>
        <div className=" ">
          <UploadBtn />
        </div>
      </div>
      <ImageGrid
        images={results.resources}
        getImage={(imagedata: SearchResult) => {
          return (
            <CloudinaryImage
              imagedata={imagedata}
              key={imagedata.public_id}
              alt=""
            />
          );
        }}
      />
    </section>
  );
}
