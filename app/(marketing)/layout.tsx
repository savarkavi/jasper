import React from "react";
import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[2000px] flex flex-col dark:bg-[#1f1f1f]">
      <Navbar />
      <main className="h-[900px]">{children}</main>
    </div>
  );
};

export default MarketingLayout;
