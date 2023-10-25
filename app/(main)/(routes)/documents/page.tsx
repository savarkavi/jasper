"use client";

import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { useSidebar } from "@/app/context/SidebarContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import MainNavbar from "../../_components/MainNavbar";

const MainPage = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const newNote = create({ title: "Untitled" });

    toast.promise(newNote, {
      loading: "Creating a new note",
      success: "New note created",
      error: "Failed to create a note",
    });
  };

  return (
    <div
      className={`
       transition-all duration-300 overflow-x-hidden flex flex-col items-center h-full`}
    >
      <MainNavbar />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
          <Image
            src="/empty.png"
            fill
            alt="document-img"
            className="object-contain dark:hidden"
          />
          <Image
            src="/empty-dark.png"
            fill
            alt="document-img"
            className="object-contain hidden dark:block"
          />
        </div>

        <Button onClick={onCreate}>Create a Note</Button>
      </div>
    </div>
  );
};

export default MainPage;
