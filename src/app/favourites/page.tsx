import CloudinaryImage from "@/components/CloudinaryImage";
import UploadBtn from "@/components/buttons/UploadBtn";
import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";

export default async function FavouritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  //   console.log(results);

  return (
    <section className=" flex flex-col gap-8 ">
      <div className=" flex justify-between ">
        <h1 className=" text-4xl font-bold">Favourites</h1>
      </div>
      <div className=" grid grid-cols-4 gap-4">
        {results.resources.map((result) => (
          <CloudinaryImage
            imageData={result}
            key={result.public_id}
            path="/favourites"

            // src={result.public_id}
            // publicId={result.public_id}
            // width="400"
            // height="300"
            // alt="Cloudinary Image"
          />
        ))}
      </div>
    </section>
  );
}
