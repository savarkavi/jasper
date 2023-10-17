import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-between">
      <span className="cursor-pointer text-gray-500 hover:text-black transition-all">
        Privacy Policy
      </span>
      <span className="cursor-pointer text-gray-500 hover:text-black transition-all">
        Terms & Condition
      </span>
    </div>
  );
};

export default Footer;
