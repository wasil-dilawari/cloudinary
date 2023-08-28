import UploadBtn from "@/components/buttons/UploadBtn";

export default function GalleryPage() {
  return (
    <section className=" ">
      <div className=" flex justify-between">
        <h1 className=" text-4xl font-bold">Gallery</h1>
        <div className=" ">
          <UploadBtn />
        </div>
      </div>
    </section>
  );
}
