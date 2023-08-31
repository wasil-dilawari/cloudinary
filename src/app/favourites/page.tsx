import CloudinaryImage from "@/components/CloudinaryImage";
import UploadBtn from "@/components/buttons/UploadBtn";
import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";
import FavouritesList from "@/components/FavouriteList";
import ForceRefresh from "@/components/ForceRefresh";

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
      <ForceRefresh />
      <div className=" flex justify-between ">
        <h1 className=" text-4xl font-bold">Favourites</h1>
      </div>
      <FavouritesList initialResources={results.resources} />
    </section>
  );
}
