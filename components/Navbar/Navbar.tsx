import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full h-20 backdrop-blur-md bg-white/60">
      <div className="flex items-center justify-between w-full h-full px-4 xl:px-24">
        <Link
          href="/"
          className="italic font-black md:text-lg"
        >
          just_icons
        </Link>
        <a
          target="_blank"
          href="https://github.com/K-Sikora/icon-library"
        >
          <AiFillGithub size={28} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
