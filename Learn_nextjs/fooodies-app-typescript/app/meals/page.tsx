import Link from "next/link";

import classes from "./page.module.css";
import MealGird from "@/components/meals/meal-gird";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import {authOptions} from '@/app/api/auth/[...nextauth]/route'
import { redirect } from "next/navigation";
// import { redirect } from "next/dist/server/api-utils";

export default async function MealPage() {
  const meals = await getMeals();

    const session = await getServerSession(authOptions);

    console.log("session",session?.user)
    if(!session){
      redirect("/auth")
    }


  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
          </div>
        </div>
      </header>
      <main>
        {/* <Suspense> */}
        <MealGird meals={meals} />
        {/* </Suspense> */}

        {/* <Test /> */}
      </main>
    </>
  );
}
