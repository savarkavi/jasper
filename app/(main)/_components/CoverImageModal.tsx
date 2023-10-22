import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const CoverImageModal = ({ children }: { children: React.ReactNode }) => {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();

  const update = useMutation(api.documents.updateDoc);
  const params = useParams();

  const onChange = async (file?: File) => {
    if (file) {
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
      });

      update({
        documentId: params.documentsId as Id<"documents">,
        coverImage: res.url,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader className="flex justify-center w-full">
          <DialogTitle>
            <h2 className="text-center mb-4">Cover Image</h2>
          </DialogTitle>
          <DialogDescription>
            <SingleImageDropzone value={file} onChange={onChange} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModal;
