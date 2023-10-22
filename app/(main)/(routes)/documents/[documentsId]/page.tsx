"use client";

import DocNavbar from "@/app/(main)/_components/DocNavbar";
import Toolbar from "@/app/(main)/_components/Toolbar";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import CoverImage from "@/app/(main)/_components/CoverImage";

const DocumentPage = () => {
  const params = useParams();
  const document = useQuery(api.documents.getDocById, {
    documentId: params.documentsId as Id<"documents">,
  });

  if (!document) {
    return <div>Document not found.</div>;
  }

  return (
    <div className="h-full">
      <DocNavbar />
      <CoverImage url={document.coverImage} />
      <div className="mt-8">
        <Toolbar document={document} />
      </div>
    </div>
  );
};

export default DocumentPage;
