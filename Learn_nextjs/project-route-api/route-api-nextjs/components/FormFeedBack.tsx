"use client";

import { creatFeedBack } from "@/action/action";
import React, { useEffect, useState } from "react";

interface FeedBackProps {
  feedback: string;
}

const FormFeedBack = () => {
  const [a, setA]= useState('')
  async function onsubmit(formData: FormData) {
    const result = await creatFeedBack(formData);
  }
  useEffect(()=>{
    console.log("user effect child");

    setA('duong')
  },[])

  console.log("data")
  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <h2>Home page</h2>
        <form action={onsubmit}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border w-[250px]"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="feedback">Feedback</label>
            <textarea
              className="border w-[250px]"
              id="feedback"
              name="feedback"
              rows={5}
            ></textarea>
          </div>

          <button type="submit" className="bg-green-300 p-2 rounded mt-4">
            Send Feedback
          </button>
        </form>
      </div>
    </>
  );
};

export default FormFeedBack;
