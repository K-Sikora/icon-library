"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type Props = {};

const GoBack = (props: Props) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant="link"
    >
      Go back
    </Button>
  );
};

export default GoBack;
