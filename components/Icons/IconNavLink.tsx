"use client";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
type Props = {
  category: string;
};

const IconNavLink = (props: Props) => {
  const pathname = usePathname();
  const { category } = props;
  return (
    <Link
      key={category}
      className={`${buttonVariants({
        variant: "default",
      })} 
      capitalize ${
        pathname === `/icons/${category}` ? "bg-primary" : "bg-primary/60"
      } `}
      href={`${category}`}
    >
      {category}
    </Link>
  );
};

export default IconNavLink;
