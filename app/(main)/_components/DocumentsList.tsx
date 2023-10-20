"use client";

import React from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { File, MoreHorizontal, Trash } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsList = () => {
  const documents = useQuery(api.documents.getSidebar);
  const archive = useMutation(api.documents.archive);
  const router = useRouter();

  const onArchive = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentId: Id<"documents">
  ) => {
    e.stopPropagation();
    const document = archive({ id: documentId });

    toast.promise(document, {
      loading: "Archiving Note",
      success: "Note archived",
      error: "Failed to archive the note",
    });
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleDocumentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentId: Id<"documents">
  ) => {
    e.stopPropagation();
    router.push(`/documents/${documentId}`);
  };

  return (
    <div className="flex flex-col mt-4">
      {documents?.map((document) => (
        <div
          className="px-8 group/document py-2 flex justify-between items-center gap-2 hover:bg-gray-200 dark:hover:bg-stone-700  cursor-pointer"
          key={document._id}
        >
          <div
            className="flex items-center gap-2 text-sm"
            onClick={(e) => handleDocumentClick(e, document._id)}
          >
            <File className="w-4 h-4 text-gray-600 dark:text-gray-300 " />
            {document?.title}
          </div>
          <div className="text-gray-600">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div role="button">
                  <MoreHorizontal className="w-4 h-4 dark:text-gray-300" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60">
                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={(e) => onArchive(e, document._id)}
                >
                  <Trash className="text-gray-600 w-4 h-4" />
                  Delete
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="px-3 text-sm py-2 text-gray-600">
                  Created on: {formatDate(document._creationTime)}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentsList;
