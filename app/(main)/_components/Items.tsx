import { Search, Settings, PlusCircle, Plus, Trash } from "lucide-react";
import React from "react";
import DocumentsList from "./DocumentsList";
import TrashBox from "./TrashBox";
import { useSearch } from "@/hooks/use-search";
import SettingsModal from "./settings-modal";

const Items = () => {
  const onOpen = useSearch((store) => store.onOpen);
  const isOpen = useSearch((store) => store.isOpen);

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 px-4 py-2 hover:bg-gray-200 dark:hover:bg-stone-700 cursor-pointer"
          onClick={onOpen}
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </div>
        <SettingsModal>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300  px-4 py-2 hover:bg-gray-200 dark:hover:bg-stone-700  cursor-pointer">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </div>
        </SettingsModal>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300  px-4 py-2 hover:bg-gray-200 dark:hover:bg-stone-700  cursor-pointer">
          <PlusCircle className="w-4 h-4" />
          <span>New Page</span>
        </div>
      </div>
      <DocumentsList />
      <TrashBox />
    </div>
  );
};

export default Items;
