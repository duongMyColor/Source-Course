"use client";
import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/action";
import { useContext, useEffect } from "react";

import { shareContext } from "@/store/share-context";
import { useState } from "react";
export default function ShareMealPage() {
  const [meal, setMeal] = useState({});
  const mealInfor = useContext(shareContext);

  const saveMealInfo = (e, nameValue) => {
    setMeal((prevMeal) => {
      const newMeal = { ...prevMeal };
      newMeal[nameValue] = e.target.value;
      return newMeal;
    });

    mealInfor.SET_MEAL(meal);
  };

  useEffect(() => {
    setMeal(mealInfor.meal ? mealInfor.meal : {});
  }, []);

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={meal.creator}
                onChange={(e) => saveMealInfo(e, "creator")}
              />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={meal.creator_email}
                onChange={(e) => saveMealInfo(e, "creator_email")}
              />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={meal.title}
              onChange={(e) => saveMealInfo(e, "title")}
            />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              value={meal.summary}
              onChange={(e) => saveMealInfo(e, "summary")}
            />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              value={meal.instructions}
              onChange={(e) => saveMealInfo(e, "instructions")}
            ></textarea>
          </p>
          <ImagePicker label="Your name" name="image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
