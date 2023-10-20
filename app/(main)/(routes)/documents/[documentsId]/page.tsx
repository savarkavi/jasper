"use client";

import DocNavbar from "@/app/(main)/_components/DocNavbar";
import Toolbar from "@/app/(main)/_components/Toolbar";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const DocumentPage = () => {
  const params = useParams();
  const document = useQuery(api.documents.getDocById, {
    documentId: params.documentsId as Id<"documents">,
  });

  return (
    <div className="h-full">
      <DocNavbar />
      <div className="h-[35vh]" />
      <div>
        <Toolbar document={document} />
      </div>
    </div>
  );
};

export default DocumentPage;
