import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModeToggle } from "@/components/theme-toggle";

const SettingsModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-4 border-b">My settings</DialogTitle>
          <DialogDescription className="pt-4 flex items-center justify-between">
            <span>Customize how Jasper looks on your device</span>
            <ModeToggle />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
