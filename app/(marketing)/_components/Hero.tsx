import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] ">
        <Image
          src="/documents.png"
          fill
          alt="documents"
          className="object-contain dark:hidden"
        />
        <Image
          src="/documents-dark.png"
          fill
          alt="documents"
          className="object-contain hidden dark:block"
        />
      </div>
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] hidden md:block">
        <Image
          src="/reading.png"
          fill
          alt="reading"
          className="object-contain dark:hidden"
        />
        <Image
          src="/reading-dark.png"
          fill
          alt="reading"
          className="object-contain hidden dark:block"
        />
      </div>
    </div>
  );
};

export default Hero;
