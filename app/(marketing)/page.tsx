import React from "react";
import Heading from "./_components/Heading";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";

const page = () => {
  return (
    <div className="p-6 sm:p-8 flex flex-col justify-between h-full items-center">
      <div className="flex flex-col justify-center items-center h-full">
        <Heading />
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default page;
