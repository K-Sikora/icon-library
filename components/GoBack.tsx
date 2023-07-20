"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { AiOutlineArrowLeft } from "react-icons/ai";
const GoBack = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant="link"
      className="flex items-center gap-1 text-base text-primary-foreground"
    >
      <AiOutlineArrowLeft />
      Go back
    </Button>
  );
};

export default GoBack;
