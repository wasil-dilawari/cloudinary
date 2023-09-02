import CloudinaryImage from "@/components/CloudinaryImage";
import ForceRefresh from "@/components/ForceRefresh";
import ImageGrid from "@/components/ImageGrid";
import UploadBtn from "@/components/buttons/UploadBtn";
import cloudinary from "cloudinary";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function albumPage({
  params: { albumName },
}: {
  params: { albumName: string };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  // console.log(results);

  return (
    <section className=" flex flex-col gap-8 ">
      <ForceRefresh />

      <div className=" flex justify-between ">
        <h1 className=" text-4xl font-bold">Album: {albumName}</h1>
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
