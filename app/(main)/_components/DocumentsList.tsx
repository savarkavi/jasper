import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { File, MoreHorizontal, Trash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DocumentsList = () => {
  const documents = useQuery(api.documents.getSidebar);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="flex flex-col mt-4">
      {documents?.map((document) => (
        <div
          className="px-8 group/document py-2 flex justify-between items-center gap-2 hover:bg-gray-200 cursor-pointer"
          key={document._id}
        >
          <div className="flex items-center gap-2">
            <File className="w-4 h-4 text-gray-600" />
            {document?.title}
          </div>
          <div className="text-gray-600">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div role="button">
                  <MoreHorizontal className="w-4 h-4 hover:bg-gray-300" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60">
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
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
