"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const shareMeal = async (formData) => {
  "use server";
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log({ meal });

  await saveMeal(meal);
  redirect("/meals");
};

export const createUser = async (formData) => {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(user),
  });
  const data = await response.json()

  console.log({data})
  
};
