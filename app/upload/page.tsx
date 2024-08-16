"use client";
import React from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { set } from "zod";
import { sources } from "next/dist/compiled/webpack/webpack";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = React.useState("");

  return (
    <>
      {publicId && (
        <CldImage alt={""} src={publicId} height={270} width={100}></CldImage>
      )}
      <CldUploadWidget
        options={{
          sources: ["local"],
        }}
        uploadPreset="e1kmmruj"
        onSuccess={(results, widget) => {
          const info = results.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
