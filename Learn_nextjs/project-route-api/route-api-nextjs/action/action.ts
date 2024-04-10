"use server";

import fs from "fs";
import path from "path";
import { revalidateTag } from "next/cache";

export const creatFeedBack = async (formData: FormData) => {
  const rawFormData = {
    email: formData.get("email"),
    feedBack: formData.get("feedback"),
  };
  // console.log({ rawFormData });

  const newFeedBack = {
    id: new Date().toISOString(),
    email: rawFormData.email,
    feedBack: rawFormData.feedBack,
  };
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  try {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse((fileData.toString()));
    data.push(newFeedBack);
  
    fs.writeFileSync(filePath, JSON.stringify(data));
    revalidateTag("product");

    

    // mutate data
    // revalidate cache
  } catch (error) {
    console.error("Error writing data to file:", error);
  }
};
