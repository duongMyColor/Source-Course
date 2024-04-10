import { hashPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  console.log({ data });

  const { email, password } = data;
  const db = await connectToDatabase();
  const user = await db.collection("users").findOne({ email });

  if (user) {
    return NextResponse.json({ message: "user exist!" }, { status: 201 });
  }

  const hashedPassword = await hashPassword(password);
  db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  return NextResponse.json(
    { message: "created user success!" },
    { status: 200 }
  );
}
