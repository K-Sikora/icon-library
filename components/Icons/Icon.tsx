import Link from "next/link";
import React from "react";

type Props = {
  icon: {
    name: string;
    url: string;
  };
  category: string;
};

const Icon = (props: Props) => {
  const { icon, category } = props;
  return (
    <Link
      href={`/icons/${category}/${icon.name}`}
      key={icon.name}
      className="flex flex-col items-center justify-center gap-2 duration-300 bg-[#695BFF]/30 border-2 rounded-md shadow-md hover:border-indigo-700 hover:bg-[#695BFF]/70 aspect-square"
    >
      <img
        className="w-7 h-7 xl:w-8 xl:h-8"
        src={icon.url}
      />
      <h3 className="w-full h-4 px-3 text-xs font-medium text-center truncate">
        {icon.name}
      </h3>
    </Link>
  );
};

export default Icon;
