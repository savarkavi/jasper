"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type IconPicker = {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
};

const IconPicker = ({ children, onChange, asChild }: IconPicker) => {
  return (
    <div className="">
      <Popover>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <EmojiPicker
            width={350}
            height={350}
            onEmojiClick={(data) => onChange(data.emoji)}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default IconPicker;
