import CloudinaryImage from "@/components/CloudinaryImage";
import UploadBtn from "@/components/buttons/UploadBtn";
import cloudinary from "cloudinary";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  //   console.log(results);

  return (
    <section className=" flex flex-col gap-8 ">
      <div className=" flex justify-between ">
        <h1 className=" text-4xl font-bold">Gallery</h1>
        <div className=" ">
          <UploadBtn />
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-4">
        {results.resources.map((result) => (
          <CloudinaryImage
            imageData={result}
            key={result.public_id}
            path="/gallery"
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
