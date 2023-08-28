"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Button } from "../ui/button";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: string;
};

export default function UploadBtn() {
  const [imageId, setimageId] = useState("");
  return (
    <Button asChild>
      <div className=" flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        <CldUploadButton
          onUpload={(result: any) => {
            console.log(result);
            setimageId(result.info.public_id);
          }}
          uploadPreset="n3fk9rzi"
        />
        {/* {imageId && (
        <CldImage width="400" height="300" src={imageId} sizes="100vw" alt="" />
      )} */}
      </div>
    </Button>
  );
}
