"use client";

import { Trash } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";

interface ImageContainerProps {
  url: string;
  onRemove: (url: string) => void;
}

const ImageContainer = ({ url, onRemove }: ImageContainerProps) => {
  console.log("Url to be display: ", url);
  return (
    <div
      key={url}
      className="relative w-[200px] h-[200px] rounded-md overflow-hidden shrink-0"
    >
      <div className="z-10 absolute top-2 right-2">
        <Button
          type="button"
          onClick={() => onRemove(url)}
          variant="destructive"
          size="sm"
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Image fill className="object-cover" alt="Image" src={url} />
    </div>
  );
};

export default ImageContainer;
