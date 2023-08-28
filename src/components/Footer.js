import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-6 py-5 h-auto bg-blue-800">
        <div className="hidden lg:block"></div>
        <div></div>
        <div className="text-center lg:text-right text-white">
          <p className="font-bold">
            @2023 • Terms of Use Privacy Policy By Mobopack
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
