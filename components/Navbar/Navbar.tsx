import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full h-20 backdrop-blur-md bg-white/60">
      <div className="flex items-center justify-between w-full h-full px-4 xl:px-24">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 italic font-black md:text-lg"
        >
          just_icons
        </Link>
        <Link href="https://github.com/K-Sikora/icon-library">
          <AiFillGithub size={36} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
