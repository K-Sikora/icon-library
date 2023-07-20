"use client";
import { type Icon } from "@/app/types/IconType";
import { useState } from "react";
import SingleIcon from "./SingleIcon";
import { Input } from "../ui/input";
import { BiSearch } from "react-icons/bi";
import { categories } from "@/app/constants";
import IconNavLink from "./IconNavLink";
type Props = {
  icons: Icon[];
  category: string;
};

const IconContainer = (props: Props) => {
  const { icons, category } = props;
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="relative flex flex-col w-full gap-6">
        <Input
          className="pr-10 bg-gray-100 border-2"
          placeholder={`Search ${category} icons...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-12">
          <BiSearch size={22} />
        </div>
        <nav className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <IconNavLink
              key={category.name}
              category={category.name}
            />
          ))}
        </nav>
      </div>
      <div className="grid w-full min-h-screen grid-cols-3 gap-2 xs:grid-cols-4 md:gap-4 place-content-start sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
        {icons
          .filter((icon) =>
            icon.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((icon) => (
            <SingleIcon
              key={icon.name}
              icon={icon}
              category={icon.category}
            />
          ))}
      </div>
    </>
  );
};

export default IconContainer;
