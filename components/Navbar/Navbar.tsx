import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-20 w-full h-20 bg-primary/40 backdrop-blur-sm">
      <div className="flex items-center justify-center w-full h-full max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex items-center justify-start w-1/3">
          <Menubar className="bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="bg-transparent rounded-md active:bg-red-400">
                Categories
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="flex items-center justify-center w-1/3">
          <Link
            href="/"
            className="text-sm italic font-bold"
          >
            just_icons
          </Link>
        </div>
        <div className="flex items-center justify-end w-1/3">
          <Link
            href="/"
            className="text-sm italic font-bold"
          >
            just_icons
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
