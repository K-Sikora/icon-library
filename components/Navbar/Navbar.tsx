import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full h-20 backdrop-blur-md">
      <div className="flex items-center justify-between w-full h-full px-4 md:px-24">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 italic font-black text-white md:text-lg"
        >
          just_icons
        </Link>
        <Link
          href="https://github.com/K-Sikora"
          className="text-white"
        >
          <AiFillGithub size={29} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
