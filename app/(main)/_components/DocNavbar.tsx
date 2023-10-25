import React from "react";
import { AlignJustify, MoreHorizontal } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { useSidebar } from "@/app/context/SidebarContext";
import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import Banner from "./Banner";
import { Button } from "@/components/ui/button";

const MainNavbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const params = useParams();

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const document = useQuery(api.documents.getDocById, {
    documentId: params.documentsId as Id<"documents">,
  });

  return (
    <div
      className={`${
        isSidebarOpen && isMobile ? "w-0" : "w-full h-38 p-4"
      } overflow-x-hidden transition-all duration-300 flex flex-col`}
    >
      <div className="w-full flex justify-between items-center gap-6">
        {
          <AlignJustify
            className="cursor-pointer"
            onClick={handleSidebarOpen}
          />
        }

        <div className="flex items-center justify-between w-full">
          <div>
            {!!document?.icon && document.icon}
            {document?.title}
          </div>
        </div>
      </div>
      {document?.isArchived && <Banner documentId={document._id} />}
    </div>
  );
};

export default MainNavbar;
