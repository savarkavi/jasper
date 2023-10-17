"use client";

import React from "react";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/Loader";
import Navigation from "./_components/Navigation";
import { SidebarProvider } from "../context/SidebarContext";
import { Toaster } from "sonner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <SidebarProvider>
      <div className={`flex h-full`}>
        <Navigation />
        <Toaster position="top-center" />
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
