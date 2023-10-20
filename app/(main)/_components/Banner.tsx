import React from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Banner = ({ documentId }: { documentId: Id<"documents"> }) => {
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);
  const router = useRouter();

  const onRestore = () => {
    const document = restore({ id: documentId });

    toast.promise(document, {
      loading: "Restoring Note...",
      success: "Note Restored",
      error: "Failed to restore the note",
    });
  };

  const onRemove = () => {
    const document = remove({ id: documentId });

    toast.promise(document, {
      loading: "Deleting Note...",
      success: "Note Deleted",
      error: "Failed to delete the note",
    });

    router.push("/documents");
  };

  return (
    <div className="mt-8 bg-red-400 w-full flex justify-center p-4 items-center text-white">
      <div className="flex items-center gap-4">
        <span>This page is in Trash</span>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent"
          onClick={onRestore}
        >
          Restore Page
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent"
          onClick={onRemove}
        >
          Delete forever
        </Button>
      </div>
    </div>
  );
};

export default Banner;
