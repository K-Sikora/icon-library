"use client";
import { Button } from "./ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { AiFillCopy, AiOutlineLink } from "react-icons/ai";
import { BiText } from "react-icons/bi";
type Props = {
  url: string;
  name: string;
};
const CopyUrlButton = (props: Props) => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(props.url);
  };
  const handleCopyName = () => {
    navigator.clipboard.writeText(props.name);
  };
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="px-8 cursor-pointer flex gap-1 items-center justify-center">
          Copy
          <AiFillCopy size={18} />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            className="cursor-pointer"
            onClick={handleCopyUrl}
          >
            Copy URL
            <MenubarShortcut>
              <AiOutlineLink size={18} />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem
            className="cursor-pointer"
            onClick={handleCopyName}
          >
            Copy name
            <MenubarShortcut>
              <BiText size={18} />
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default CopyUrlButton;
