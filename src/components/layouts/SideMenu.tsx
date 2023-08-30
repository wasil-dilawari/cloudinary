import { Button } from "../ui/button";
import Link from "next/link";
import { Folder, Heart, ImageIcon } from "lucide-react";

export default function SideMenu() {
  return (
    <div className="">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Link href="/gallery">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <ImageIcon strokeWidth={1.5} />
                Gallery
              </Button>
            </Link>
            <Link href="/albums">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Folder strokeWidth={1.5} />
                Albums
              </Button>
            </Link>
            <Link href="/favourites">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Heart strokeWidth={1.5} /> Favourites
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
