import { Button } from "@/components/ui/button";
import { DeleteIcon, ImageIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import CoverImageModal from "./CoverImageModal";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const CoverImage = ({ url, preview }: { url?: string; preview?: boolean }) => {
  const remove = useMutation(api.documents.removeCover);
  const params = useParams();

  const handleRemove = () => {
    remove({ documentId: params.documentsId as Id<"documents"> });
  };

  return (
    <div className="relative group">
      <div className={`relative w-full ${url && "h-[300px]"}`}>
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
          <Button
            className="flex items-center gap-2 bg-white text-black hover:bg-white"
            onClick={handleRemove}
          >
            <DeleteIcon className="w-4 h-4" />
            <span className="text-sm">Remove</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CoverImage;
