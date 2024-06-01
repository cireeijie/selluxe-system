import React from "react";
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

export default function ListAndSearch() {
  return (
    <Command>
      <CommandInput placeholder="Search file..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Sections">
          <CommandItem>Section 1</CommandItem>
          <CommandItem>Section 2</CommandItem>
          <CommandItem>Section 3</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Blocks">
          <CommandItem>Block 1</CommandItem>
          <CommandItem>Block 2</CommandItem>
          <CommandItem>Block 3</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
