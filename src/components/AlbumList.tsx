import { getFoldersAction } from "@/lib/actions";
import { Button } from "./ui/button";
import Link from "next/link";
import { Folder } from "@/lib/types";

export default async function AlbumList() {
  const { folders } = await getFoldersAction();

  return (
    <section>
      {folders.map((folder: Folder) => (
        <Link href={`/albums/${folder.path}`} key={folder.name}>
          <Button variant="ghost" className="w-full justify-start gap-2 pl-8">
            {folder.name}
          </Button>
        </Link>
      ))}
    </section>
  );
}
