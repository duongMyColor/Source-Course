const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://duongpham:NtmgQerVFosafIPR@foodie-app.argskzj.mongodb.net/?retryWrites=true&w=majority&appName=foodie-app";
export const connectToDatabase = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db()

  console.log("connect to database success");
  return db;
};
