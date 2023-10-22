import { Button } from "@/components/ui/button";
import { DeleteIcon, ImageIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import CoverImageModal from "./CoverImageModal";

const CoverImage = ({ url, preview }: { url?: string; preview?: boolean }) => {
  return (
    <div className="relative group">
      <div className="relative w-full h-[300px]">
        {!!url && (
          <Image src={url} alt="cover image" fill className="object-cover" />
        )}
      </div>
      {!!url && !preview && (
        <div className="absolute right-4 bottom-4  items-center gap-4 hidden group-hover:flex">
          <CoverImageModal>
            <Button className="flex items-center gap-2 bg-white text-black hover:bg-white">
              <ImageIcon className="w-4 h-4" />
              <span className="text-sm">Change cover</span>
            </Button>
          </CoverImageModal>
          <Button className="flex items-center gap-2 bg-white text-black hover:bg-white">
            <DeleteIcon className="w-4 h-4" />
            <span className="text-sm">Remove</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CoverImage;
