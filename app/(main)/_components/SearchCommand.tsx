import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const SearchCommand = () => {
  const documents = useQuery(api.documents.getSidebar);

  return (
    <Command>
      <CommandInput placeholder="Search your Notes..." />
      <CommandList>
        <CommandEmpty>Sorry, no results found :(</CommandEmpty>
        <CommandGroup heading="Notes">
          {documents?.map((document) => (
            <CommandItem key={document._id}>{document.title}</CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SearchCommand;
