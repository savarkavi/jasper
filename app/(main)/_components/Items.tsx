import { Search, Settings, PlusCircle, Plus, Trash } from "lucide-react";
import React from "react";
import DocumentsList from "./DocumentsList";

const Items = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-gray-600 px-4 py-2 hover:bg-gray-200 cursor-pointer">
          <Search className="w-4 h-4" />
          <span>Search</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 px-4 py-2 hover:bg-gray-200 cursor-pointer">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 px-4 py-2 hover:bg-gray-200 cursor-pointer">
          <PlusCircle className="w-4 h-4" />
          <span>New Page</span>
        </div>
      </div>
      <DocumentsList />
      <div className="flex items-center gap-2 text-gray-600 px-4 py-2 hover:bg-gray-200 cursor-pointer mt-4">
        <Trash className="w-4 h-4" />
        <span>Trash</span>
      </div>
    </div>
  );
};

export default Items;
