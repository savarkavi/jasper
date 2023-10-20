import { Id } from "@/convex/_generated/dataModel";
import { Search, Trash, Undo } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import ConfirmModal from "@/app/(main)/_components/confirm-modal";

const TrashBox = () => {
  const [search, setSearch] = useState("");

  const archivedDocuments = useQuery(api.documents.getTrash);
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);
  const params = useParams();
  const router = useRouter();

  const onRestore = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    documentId: Id<"documents">
  ) => {
    e.stopPropagation();
    const document = restore({ id: documentId });

    toast.promise(document, {
      loading: "Restoring Note...",
      success: "Note Restored",
      error: "Failed to restore the note",
    });
  };

  const onRemove = (documentId: Id<"documents">) => {
    const document = remove({ id: documentId });

    toast.promise(document, {
      loading: "Deleting Note...",
      success: "Note Deleted",
      error: "Failed to delete the note",
    });

    if (params.documentId === documentId) {
      router.push("/documents");
    }
  };

  const handleDocumentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentId: Id<"documents">
  ) => {
    e.stopPropagation();
    router.push(`/documents/${documentId}`);
  };

  const filteredDocuments = archivedDocuments?.filter((document) => {
    return document.title.toLowerCase().includes(search.toLowerCase());
  });

  console.log(filteredDocuments);

  return (
    <div className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-stone-700  cursor-pointer mt-4 w-full">
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300  min-w-[800px] w-full">
            <Trash className="w-4 h-4" />
            <span>Trash</span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-2 flex flex-col justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <Search />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-6 outline-none bg-secondary mt-1"
              placeholder="search archived notes"
            />
          </div>
          {filteredDocuments?.length === 0 && (
            <p className="text-sm text-gray-600">No documents found</p>
          )}
          {filteredDocuments?.map((document) => {
            return (
              <div
                key={document._id}
                className="flex justify-between items-center w-full text-sm cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
                onClick={(e) => handleDocumentClick(e, document._id)}
              >
                {document.title}
                <div className="flex items-center gap-2">
                  <Undo
                    className="h-4 w-4 text-gray-600 cursor-pointer"
                    onClick={(e) => onRestore(e, document._id)}
                  />
                  <ConfirmModal onConfirm={() => onRemove(document._id)}>
                    <Trash className="h-4 w-4 text-gray-600 cursor-pointer" />
                  </ConfirmModal>
                </div>
              </div>
            );
          })}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TrashBox;
