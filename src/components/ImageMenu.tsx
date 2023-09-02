import { MenuIcon, PencilIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./AddToAlbumDialog";
import Link from "next/link";
import { SearchResult } from "@/lib/types";
import { DeleteImageDialog } from "./DeleteImageDialog";

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
        <DropdownMenuItem className=" cursor-pointer" asChild>
          <AddToAlbumDialog image={image} />
        </DropdownMenuItem>
        <DropdownMenuItem className="">
          <Link
            href={`/edit?public_id=${encodeURIComponent(image.public_id)}`}
            className=" w-full "
          >
            <Button
              variant={"link"}
              className=" w-full flex justify-start py-0 px-0 pl-2 hover:no-underline"
            >
              <PencilIcon className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className=" cursor-pointer" asChild>
          <DeleteImageDialog image={image} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
