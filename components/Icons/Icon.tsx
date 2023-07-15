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
      className="flex flex-col items-center justify-center gap-2 duration-300 border-2 rounded-md shadow-md shadow-sky-400/20 bg-sky-600/95 hover:bg-sky-600/40 hover:border-sky-600 aspect-square"
    >
      <img
        className="w-7 h-7 xl:w-8 xl:h-8"
        src={icon.url}
      />
      <h3 className="w-full h-4 px-3 text-xs font-medium text-center text-white truncate">
        {icon.name}
      </h3>
    </Link>
  );
};

export default Icon;
