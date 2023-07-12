import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="h-20 w-full bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8 h-full flex justify-between items-center">
        <div>
          <Link href="/" className="italic font-bold text-sm">
            just_icons
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
