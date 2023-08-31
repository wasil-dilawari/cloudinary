import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Folder } from "@/app/albums/page";
import Link from "next/link";

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
