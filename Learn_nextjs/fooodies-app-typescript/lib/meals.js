import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}
export async function getDetailMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  console.log("meal.slug", meal);
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage));

  meal.image = `/images/${fileName}`;
  console.log("mea affter", meal);
  db.prepare(
    ` INSERT INTO meals (title, summary,instructions,creator,creator_email,image,slug) VALUES (
         @title, 
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug
      )
  `
  ).run(meal);
}
