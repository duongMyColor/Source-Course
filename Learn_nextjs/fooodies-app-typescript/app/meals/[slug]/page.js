import Image from "next/image";
import classes from "./page.module.css";
import { getDetailMeal } from "@/lib/meals";
import NotFound from "@/app/not-found";

export default async function MealDetailsPage({ params }) {
  const mealDetail = await getDetailMeal(params.slug);

  if(!mealDetail){
    return <NotFound/>
  }

  mealDetail.instructions = mealDetail.instructions.replace(/\n/g, "<br />");


  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={mealDetail.image} alt={mealDetail.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{mealDetail.title}</h1>
          <p className={classes.creator}>
            by{" "}
            <a href={`mailto:${mealDetail.creator_email}`}>
              {mealDetail.creator}
            </a>
          </p>
          <p className={classes.sammary}>{mealDetail.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: mealDetail.instructions }}
        ></p>
      </main>
    </>
  );
}
