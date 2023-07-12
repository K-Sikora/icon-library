"use client";
import { Icons } from "@/app/services/getIcons";
import React, { useState } from "react";
import Icon from "./Icon";
import { Input } from "../ui/input";
import { BiSearch } from "react-icons/bi";
type Props = {
  icons: Icons[];
};

const IconContainer = (props: Props) => {
  const { icons } = props;
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="relative w-full">
        <Input
          className="border-2 pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="w-12 h-12 flex items-center justify-center absolute right-0 top-0">
          <BiSearch size={22} />
        </div>
      </div>
      <div className="min-h-screen grid grid-cols-3 place-content-start sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4 max-w-screen-xl w-full xl:mx-auto">
        {icons
          .filter((icon) =>
            icon.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((icon) => (
            <Icon
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
