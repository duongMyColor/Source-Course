import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { dataType } from "../page";

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
       const fileData = fs.readFileSync(filePath);
      //  console.log({ fileData });
       const data = JSON.parse(fileData.toString());
      //  console.log({ data });
    const a = await setTimeout(() => {
      console.log("object");
    }, 5000);

  return NextResponse.json({ data:data}, { status: 200 });
}
interface PostType{
    newFeedBack:dataType
}

export async function POST(req: any) {
    const { newFeedBack  } = req.body;

    console.log({newFeedBack})


  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  console.log({ fileData });
  const data = JSON.parse(fileData.toString());
  console.log({ data });

  return NextResponse.json({ data: data }, { status: 200 });
}
