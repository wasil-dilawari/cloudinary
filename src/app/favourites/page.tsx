import cloudinary from "cloudinary";
import FavouritesList from "@/components/FavouriteList";
import ForceRefresh from "@/components/ForceRefresh";
import { SearchResult } from "@/lib/types";

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
