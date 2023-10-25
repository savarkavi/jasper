import { Doc } from "@/convex/_generated/dataModel";
import React from "react";
import IconPicker from "./IconPicker";
import { Cross, Delete, ImageIcon, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextareaAutosize from "react-textarea-autosize";
import Title from "./Title";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import CoverImageModal from "./CoverImageModal";
import Editor from "./Editor";

const Toolbar = ({
  document,
  preview,
}: {
  document: Doc<"documents">;
  preview?: boolean;
}) => {
  const update = useMutation(api.documents.updateDoc);
  const removeIcon = useMutation(api.documents.removeIcon);

  const onEmojiSelect = (icon: string) => {
    update({ documentId: document._id, icon: icon });
  };

  const onEmojiRemove = () => {
    removeIcon({ documentId: document._id });
  };

  const onChange = (content: string) => {
    update({ documentId: document._id, content: content });
  };

  return (
    <div className="pl-[350px] pr-10">
      <div className="group">
        {!!document?.icon && !preview && (
          <div className="w-[300px] flex gap-2 group/icon">
            <IconPicker onChange={onEmojiSelect}>
              <p className="text-6xl">{document.icon}</p>
            </IconPicker>
            <Delete
              className="hidden group-hover/icon:block text-lg cursor-pointer text-gray-500"
              onClick={onEmojiRemove}
            />
          </div>
        )}
        {!!document?.icon && preview && <div>{document.icon}</div>}
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100">
          <div className="flex items-center gap-2">
            {!document?.icon && !preview && (
              <IconPicker onChange={onEmojiSelect}>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Smile className="w-4 h-4" />
                  <span className="text-xs">Add emoji</span>
                </Button>
              </IconPicker>
            )}
          </div>
          <div
            className={`flex items-center gap-2 ${
              !!document?.icon && !preview && "mt-6"
            }`}
          >
            {!document?.coverImage && !preview && (
              <div>
                <CoverImageModal>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span className="text-xs">Add cover</span>
                  </Button>
                </CoverImageModal>
              </div>
            )}
          </div>
        </div>
        <Title document={document} />
      </div>
      <Editor onChange={onChange} initialContent={document.content} />
    </div>
  );
};

export default Toolbar;
