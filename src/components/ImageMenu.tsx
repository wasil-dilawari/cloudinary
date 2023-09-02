import { MenuIcon, PencilIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./AddToAlbumDialog";
import Link from "next/link";
import { SearchResult } from "@/lib/types";

export function ImageMenu({ image }: { image: SearchResult }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className=" w-6 h-6 p-0 bg-black/25 text-gray-700 hover:text-white"
        >
          <MenuIcon className=" w-4 h-4 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <AddToAlbumDialog image={image} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button
            asChild
            variant={"ghost"}
            className=" cursor-pointer justify-start pl-4 "
          >
            <Link
              href={`/edit?public_id=${encodeURIComponent(image.public_id)}`}
              className=" flex justify-start"
            >
              <PencilIcon className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
