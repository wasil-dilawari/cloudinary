"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

export default function EditImagePage({
  searchParams: { public_id },
}: {
  searchParams: { public_id: string };
}) {
  const [prompt, setPrompt] = useState("");
  const [tempprompt, setTempPrompt] = useState("");

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
          <div className="flex flex-col gap-2">
            <Button
              variant={"secondary"}
              onClick={() => {
                setPrompt(tempprompt);
                setTransformation("generative-fill");
              }}
            >
              Apply Generative Fill
            </Button>
            {/* <Label htmlFor="prompt" className="text-right">
              Prompt:
            </Label> */}
            <Input
              id="prompt"
              placeholder="Provide Prompt for Fill"
              className="col-span-3"
              value={tempprompt}
              onChange={(e) => setTempPrompt(e.currentTarget.value)}
            />
          </div>
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
              sizes="100vw"
              crop="pad"
              fillBackground={{ prompt: `${prompt}` }}
            />
          )}
          {transformation === "face-blur" && (
            <CldImage
              src={public_id}
              width="400"
              height="300"
              alt=""
              sizes="100vw"
              effects={[
                {
                  blurFaces: "800",
                },
              ]}
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={public_id}
              width="400"
              height="300"
              alt=""
              sizes="100vw"
              effects={[
                {
                  grayscale: true,
                },
              ]}
            />
          )}
        </div>
      </div>
    </section>
  );
}
