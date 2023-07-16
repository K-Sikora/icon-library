import Link from "next/link";
import { getIcons } from "./services/getIcons";
import { categories } from "./constants";

export default async function Home() {
  let iconsLength = 0;

  for (const category of categories) {
    const allIcons = await getIcons(category.name);
    iconsLength += allIcons.length;
  }
  const roundedLength = Math.floor(iconsLength / 1000) * 1000;

  const formattedLength = roundedLength.toLocaleString();

  return (
    <main className="relative bg-[url('/bg.svg')] flex flex-col items-start justify-center w-full min-h-screen gap-8 px-4 -mt-20 text-white py-36 md:px-24 bg-no-repeat bg-right bg-cover md:bg-contain">
      <h2 className="z-20 text-5xl font-bold">Vector icons library</h2>

      <h5 className="z-20 text-lg font-medium md:text-xl">
        Browse over {formattedLength} icons
      </h5>
      <div className="z-20 flex flex-wrap items-center gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/icons/${category.name}`}
            className="flex items-center justify-center w-32 h-10 gap-2 font-semibold text-black capitalize duration-300 rounded-md bg-primary hover:bg-gray-200 group"
          >
            <span>{category.name}</span>
            {category.icon}
          </Link>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
    </main>
  );
}
