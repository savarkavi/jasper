import React from "react";
import { ChevronsLeft, ChevronsUpDown, PlusCircle } from "lucide-react";
import { useSidebar } from "@/app/context/SidebarContext";
import { useMediaQuery } from "usehooks-ts";
import { UserButton, useUser } from "@clerk/clerk-react";
import Items from "./Items";

const Navigation = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { user } = useUser();

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "w-[300px]" : `w-0`
      }  bg-secondary group relative overflow-x-hidden transition-all duration-300`}
    >
      <div className="flex justify-between items-center hover:bg-gray-200 dark:hover:bg-stone-700  p-4">
        <div className="flex gap-2 items-center">
          <UserButton afterSignOutUrl="/" />
          <span className="text-sm w-[150px] cursor-default">
            {user?.fullName}
          </span>
          <ChevronsUpDown className="w-4 h-4" />
        </div>
        <ChevronsLeft
          className={`${isMobile ? "" : "hidden group-hover:block"}
              cursor-pointer transition-all`}
          onClick={handleSidebarClose}
        />
      </div>
      <Items />
      <div className="absolute w-1 h-full right-0 top-0 bg-gray-200 dark:bg-stone-700 opacity-0 group-hover:opacity-100 transition-all"></div>
    </div>
  );
};

export default Navigation;
