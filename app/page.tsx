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
    <main className="relative flex flex-col items-center text-center mx-auto px-4 md:px-20 w-full justify-center min-h-screen gap-12 py-36 bg-[url('/homepage-icons/bg-landing.svg')] bg-no-repeat bg-cover">
      <h2 className="text-5xl font-extrabold text-primary">
        Library of vector icons
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {categories.map((category) => (
          <>
            <Link
              href={`/icons/${category.name}`}
              className={`${buttonVariants({
                variant: "outline",
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
