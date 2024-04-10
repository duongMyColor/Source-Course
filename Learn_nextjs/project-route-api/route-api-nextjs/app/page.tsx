
"use client";
import FormFeedBack from "@/components/FormFeedBack";
import type { Metadata } from "next";
import { useEffect } from "react";
import useSWR, { Fetcher } from "swr";

export interface dataType {
  id: string;
  email: string;
  feedback: string;
}

const fetchData = async () => {
  const response = await fetch("http://localhost:3000/api", {
    next: { tags: ["product"], revalidate: 0},
  });
  const data = await response.json();

  console.log("gọi api get:",data);

  return data.data;
};
// const fetcher = (url:string) => fetch(url).then((res) => res.json());
export default async function Home() {
// useEffect(()=>{
//  console.log("use Effect");
// },[])

  //  const { data, error, isLoading } = useSWR(
  //    "http://localhost:3000/api",
  //    fetcher,
  //    {
  //      revalidateIfStale: false,
  //      revalidateOnFocus: false,
  //      revalidateOnReconnect: false,
  //    }
  //  );
  const data: dataType[] = await fetchData();
  console.log("data: parent",data)
  return (
    <>
      <div className="flex">
        <div>
     
          {data &&
            data?.map((feedback: dataType, idx:number) => {
              return <div key={idx}>{feedback.email}</div>;
            })}
        </div>

        <FormFeedBack />
      </div>
    </>
  );
}
