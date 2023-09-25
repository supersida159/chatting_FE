'use client'
import Button from "@/components/Atom/Button/Button";
import { FC, useState } from "react";
import { fetchWithToken } from "@/api/authwdata";
import { usePathname, useRouter } from "next/navigation";

interface PageProps {}

const Page: FC<PageProps> = () => {
  // const router = useRouter();
  const path = usePathname();
  console.log(path);
  const [result, setResult] = useState<{[key:string]:string} | null>(null);
  async function handleOnClick(){
  try {
    const fetchedResult = await fetchWithToken("http://localhost:8080/SeachFriend", {
      method: "POST",
      body: JSON.stringify({ searchingUD: "09" }),
    });
    console.log(fetchedResult)
    setResult(fetchedResult);

    console.log(fetchedResult); // Log the fetched result here

    if (result && result.token === "invalid") {
      // router.push("/login");
    }
  } catch (error) {
    console.error("API call failed:", error);
    // Handle the error (e.g., display an error message to the user)
  }
}
handleOnClick()

  // async function handleOnClick() {
  //   try {
  //     const fetchedResult = await fetchWithToken("http://localhost:8080/SeachFriend", {
  //       method: "POST",
  //       body: JSON.stringify({ searchingUD: "09" }),
  //     });
  //     console.log(fetchedResult)
  //     setResult(fetchedResult);

  //     console.log(fetchedResult); // Log the fetched result here

  //     if (result && result.token === "invalid") {
  //       // router.push("/login");
  //     }
  //   } catch (error) {
  //     console.error("API call failed:", error);
  //     // Handle the error (e.g., display an error message to the user)
  //   }
  // }

  return (
    <div>
    </div>
  );
};

export default Page;
function handleOnClick() {
  throw new Error("Function not implemented.");
}

