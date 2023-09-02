"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

export default function editImagePage({
  searchParams: { public_id },
}: {
  searchParams: { public_id: string };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "face-blur" | "grayscale"
  >();
  return (
    <section className=" flex flex-col gap-8 ">
      <div className=" flex justify-between ">
        <h1 className=" text-4xl font-bold">Edit</h1>
      </div>
      <div className=" flex flex-col gap-4">
        <div className=" flex gap-2">
          <Button
            variant={"default"}
            onClick={() => {
              setTransformation(undefined);
            }}
          >
            Clear All
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => {
              setTransformation("generative-fill");
            }}
          >
            Apply Generative Fill
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => {
              setTransformation("face-blur");
            }}
          >
            Apply Face Blur
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => {
              setTransformation("grayscale");
            }}
          >
            Grayscale
          </Button>
        </div>
        <div className=" grid grid-cols-2 gap-4">
          <CldImage src={public_id} width="400" height="300" alt="" />
          {transformation === "generative-fill" && (
            <CldImage
              src={public_id}
              width="800"
              height="300"
              alt=""
              crop="pad"
              fillBackground
            />
          )}
          {transformation === "face-blur" && (
            <CldImage
              src={public_id}
              width="400"
              height="300"
              alt=""
              blur="800"
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={public_id}
              width="400"
              height="300"
              alt=""
              grayscale
            />
          )}
        </div>
      </div>
    </section>
  );
}
