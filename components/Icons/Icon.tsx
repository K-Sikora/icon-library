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
      className="bg-gray-100 border-2 hover:border-indigo-800 duration-300 hover:bg-gray-200 shadow-md flex rounded-md flex-col items-center justify-center aspect-square gap-2"
    >
      <img
        className="w-7 h-7 xl:w-8 xl:h-8"
        src={icon.url}
      />
      <h3 className="text-xs truncate w-full px-3 h-4 font-medium text-center">
        {icon.name}
      </h3>
    </Link>
  );
};

export default Icon;
