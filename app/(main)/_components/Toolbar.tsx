import { Doc } from "@/convex/_generated/dataModel";
import React from "react";
import IconPicker from "./IconPicker";

const Toolbar = ({
  document,
  preview,
}: {
  document: Doc<"documents"> | undefined;
  preview?: boolean;
}) => {
  return (
    <div className="pl-[54px]">
      {!!document?.icon && !preview && (
        <div>
          <IconPicker onChange={() => {}}>
            <p>hi</p>
          </IconPicker>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
