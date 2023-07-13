import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { HiChevronDown } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { BiSolidBinoculars } from "react-icons/bi";
import { categories } from "@/app/icons/[category]/[icon]/page";
const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 z-20 w-full h-20 bg-primary/80 backdrop-blur-sm">
      <div className="flex items-center justify-center w-full h-full max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex items-center justify-start w-1/3">
          <Menubar className="bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="flex items-center gap-1 p-0 text-base text-white cursor-pointer">
                Categories
                <HiChevronDown size={18} />
              </MenubarTrigger>
              <MenubarContent className="rounded-md">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/icons/${category}`}
                  >
                    <MenubarItem className="capitalize duration-150 rounded-md cursor-pointer hover:bg-accent">
                      {category}{" "}
                      <MenubarShortcut>
                        <img
                          className="w-4 h-4"
                          src={`/homepage-icons/${category}.svg`}
                        />
                      </MenubarShortcut>
                    </MenubarItem>
                  </Link>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="flex items-center justify-center w-1/3 text-white">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-xl italic font-bold"
          >
            <BiSolidBinoculars size={36} />
          </Link>
        </div>
        <div className="flex items-center justify-end w-1/3">
          <Link
            href="https://github.com/K-Sikora"
            className="text-white "
          >
            <AiFillGithub size={28} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
