import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import React, { useEffect, useState } from "react";
import { Doc } from "@/convex/_generated/dataModel";

const Title = ({
  document,
  preview,
}: {
  document: Doc<"documents">;
  preview?: boolean;
}) => {
  const update = useMutation(api.documents.updateDoc);
  const [value, setValue] = useState(document?.title || "Untitled");

  const onInputChange = (input: string) => {
    setValue(input);
    update({ documentId: document._id, title: input });
  };

  return (
    <div className="text-6xl font-bold py-6">
      <div>
        <input
          value={value}
          onChange={(e) => onInputChange(e.target.value)}
          className="outline-none"
        />
      </div>
    </div>
  );
};

export default Title;
