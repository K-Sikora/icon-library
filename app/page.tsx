import Link from "next/link";
import { getIcons } from "./services/getIcons";
import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
const categories = [
  {
    name: "brand",
    icon: (
      <AiOutlineGoogle
        className="duration-300 group-hover:text-primary"
        size={24}
      />
    ),
  },
  {
    name: "social",

    icon: (
      <AiOutlineTwitter
        className="duration-300 group-hover:text-primary"
        size={24}
      />
    ),
  },
  {
    name: "solid",
    icon: (
      <BiSolidUser
        className="duration-300 group-hover:text-primary"
        size={24}
      />
    ),
  },
  {
    name: "outline",
    icon: (
      <AiOutlineUser
        className="duration-300 group-hover:text-primary"
        size={24}
      />
    ),
  },
];
export default async function Home() {
  let iconsLength = 0;

  for (const category of categories) {
    const allIcons = await getIcons(category.name);
    iconsLength += allIcons.length;
  }

  return (
    <main className="relative bg-[url('/bg.svg')] flex flex-col items-start justify-center w-full min-h-screen gap-8 px-4 -mt-20 text-white py-36 md:px-24 bg-no-repeat bg-right bg-cover md:bg-contain">
      <h2 className="text-5xl font-bold">Vector icons library</h2>

      <h5 className="text-lg font-medium md:text-xl">
        Browse over {iconsLength} icons
      </h5>
      <div className="flex flex-wrap items-center gap-4">
        {categories.map((category) => (
          <Link
            href={`/icons/${category.name}`}
            className="flex items-center justify-center gap-2 px-6 py-2 font-semibold text-black capitalize duration-300 rounded-md bg-primary hover:bg-gray-200 group"
          >
            <span>{category.name}</span>
            {category.icon}
          </Link>
        ))}
      </div>
    </main>
  );
}
