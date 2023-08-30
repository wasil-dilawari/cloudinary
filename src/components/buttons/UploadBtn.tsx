"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { UploadIcon } from "lucide-react";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: string;
};

export default function UploadBtn() {
  const [imageId, setimageId] = useState("");
  const router = useRouter();
  return (
    <Button asChild>
      <div className=" flex gap-2">
        <UploadIcon strokeWidth={1.5} />
        <CldUploadButton
          onUpload={(result: any) => {
            router.refresh();
          }}
          uploadPreset="n3fk9rzi"
        />
      </div>
    </Button>
  );
}
