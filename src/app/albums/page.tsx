import AlbumCard from "@/components/AlbumCard";
import ForceRefresh from "@/components/ForceRefresh";
import { getFoldersAction } from "@/lib/actions";
import cloudinary from "cloudinary";

export type Folder = { name: string; path: string };

export default async function AlbumsPage() {
  const { folders } = await getFoldersAction();
  // const { folders } = foldersData;
  // console.log(folders);

  return (
    <section className=" flex flex-col gap-8 ">
      <ForceRefresh />

      <div className=" flex justify-between ">
        <h1 className=" text-4xl font-bold">Albums</h1>
      </div>
      <div className=" grid grid-cols-3 gap-4">
        {folders.map((folder: Folder) => (
          <AlbumCard key={folder.name} folder={folder} />
        ))}
      </div>
    </section>
  );
}
