import Link from "next/link";
import { getIcons } from "./services/getIcons";
import { categories } from "./constants";
import Features from "@/components/Features";

export default async function Home() {
  let iconsLength = 0;

  for (const category of categories) {
    const allIcons = await getIcons(category.name);
    iconsLength += allIcons.length;
  }
  const roundedLength = Math.floor(iconsLength / 1000) * 1000;

  const formattedLength = roundedLength.toLocaleString();

  return (
    <>
      <main className="relative z-10 bg-[url('/homepage/hero.png')] -mt-24 flex flex-col items-start justify-start w-full min-h-screen px-4 xl:px-24 py-24 md:py-48 bg-no-repeat bg-cover bg-left">
        <h2 className="z-20 py-4 text-3xl font-bold text-transparent bg-gradient-to-br from-secondary to-secondary/20 md:text-5xl bg-clip-text">
          Vector icons library
        </h2>

        <h5 className="z-20 py-4 text-xl font-medium md:text-xl">
          Browse over <span className="text-secondary">{formattedLength}</span>{" "}
          icons
        </h5>
        <div className="z-20 flex flex-wrap items-center gap-4 py-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/icons/${category.name}`}
              className="flex items-center justify-center gap-1 text-sm font-semibold capitalize duration-300 rounded-md md:text-base w-28 h-9 md:w-32 md:h-10 bg-primary hover:bg-primary/90 group"
            >
              <span>{category.name}</span>
              {category.icon}
            </Link>
          ))}
        </div>
        <img
          alt=""
          className="absolute w-56 -translate-x-1/2 drop-shadow-2xl -bottom-20 md:-bottom-24 left-1/2 lg:translate-x-0 lg:left-auto lg:w-80 lg:right-24"
          src="/homepage/mobile.png"
        />
      </main>
      <Features formattedLength={formattedLength} />
    </>
  );
}
