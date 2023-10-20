import React from "react";
import { AlignJustify, MoreHorizontal } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { useSidebar } from "@/app/context/SidebarContext";

const MainNavbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div
      className={`${
        isSidebarOpen && isMobile ? "w-0" : "w-full h-16 p-4"
      } overflow-x-hidden transition-all duration-300`}
    >
      <div className="w-full flex justify-between gap-6">
        {
          <AlignJustify
            className="cursor-pointer"
            onClick={handleSidebarOpen}
          />
        }
      </div>
    </div>
  );
};

export default MainNavbar;
