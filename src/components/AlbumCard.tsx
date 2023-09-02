import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Folder } from "@/lib/types";

export default function AlbumCard({ folder }: { folder: Folder }) {
  return (
    // <div key={folder.name}>{folder.name}</div>

    <Card>
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button asChild variant={"outline"}>
          <Link href={`/albums/${folder.path}`}>View Album</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
