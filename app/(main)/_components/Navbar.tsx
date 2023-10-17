import React from "react";
import { AlignJustify } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { useSidebar } from "@/app/context/SidebarContext";

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div
      className={`${
        isSidebarOpen && isMobile ? "w-0" : "w-full h-16 p-4"
      } overflow-y-hidden transition-all duration-300`}
    >
      {<AlignJustify className="cursor-pointer" onClick={handleSidebarOpen} />}
    </div>
  );
};

export default Navbar;
