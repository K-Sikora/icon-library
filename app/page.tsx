import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
const categories = [
  {
    name: "brand",
  },
  {
    name: "social",
  },
  {
    name: "solid",
  },
  {
    name: "outline",
  },
];
export default async function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full min-h-screen gap-12 px-4 mx-auto -mt-20 text-center md:px-20 py-36">
      <h2 className="text-3xl font-extrabold md:text-5xl text-primary">
        Library of vector icons
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {categories.map((category) => (
          <>
            <Link
              href={`/icons/${category.name}`}
              className={`${buttonVariants({
                variant: "default",
                size: "lg",
              })} h-10 cursor-pointer capitalize`}
            >
              <span>{category.name}</span>
            </Link>
          </>
        ))}
      </div>
    </main>
  );
}
