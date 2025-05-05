import React from "react";

function Header() {
  return (
    <div className="w-full h-[72px] bg-[#109BE9] flex items-center px-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="space-x-4">
          <a href="#" className="text-white hover:underline font-bold">
            Home
          </a>
          <a href="#" className="text-white hover:underline font-bold">
            Business
          </a>
          <a href="#" className="text-white hover:underline font-bold">
            Entertainment
          </a>
          <a href="#" className="text-white hover:underline font-bold">
            General
          </a>
          <a href="#" className="text-white hover:underline font-bold">
            Health
          </a>
          <a href="#" className="text-white hover:underline font-bold">
            Science
          </a>
          <a href="#" className="text-white hover:underline font-bold">
            Sports
          </a>
          <a href="#" className="text-white hover:underline font-bold">
            Technology
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
