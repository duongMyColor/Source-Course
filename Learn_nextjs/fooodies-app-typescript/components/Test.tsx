"use client";

import { revalidatePath, revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";

export default function Test() {
  const router = useRouter();
  console.log("getdata client");

  const handleClick = () => {
    console.log("handleClick");

    // router.push(`/meals?${Math.random().toString()}`);

    revalidatePath("/meals");
  };

  return <button onClick={handleClick}>Click</button>;
}
