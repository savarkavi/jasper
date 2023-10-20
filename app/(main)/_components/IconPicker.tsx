"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type IconPicker = {
  onChange: () => void;
  children: React.ReactNode;
  asChild?: boolean;
};

const IconPicker = ({ children, onChange, asChild }: IconPicker) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <EmojiPicker />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default IconPicker;
