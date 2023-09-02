"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteImageAction } from "@/lib/actions";
import { SearchResult } from "@/lib/types";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function DeleteImageDialog({ image }: { image: SearchResult }) {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild className=" flex w-full justify-start">
        <Button variant="link" className="hover:no-underline">
          <Trash2Icon className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete?</DialogTitle>
          <DialogDescription>Are you sure?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={async () => {
              await deleteImageAction(image.public_id);
              setOpenDialog(false);
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
