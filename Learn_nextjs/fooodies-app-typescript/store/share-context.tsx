"use client";
import { TypeMeal } from "@/type";
import { createContext, useState } from "react";

interface ThemeContextType {
  meal: TypeMeal | undefined;
  SET_MEAL: (mealInfo: TypeMeal) => void;
}
interface ShareContextProp {
  children: React.ReactNode;
}

/**
 * step1; create context
 * step2: create wrap component
 * step3: call usecontex to component use
 */
const shareContext = createContext<ThemeContextType>({
  meal: {
    title: "",
    summary: "",
    instructions: "",
    creator: "",
    creator_email: "",
  },
  SET_MEAL: () => {},
});


const ShareContextProvide = ({ children }: ShareContextProp) => {
  const [meal, setMeal] = useState<TypeMeal>();

  const SET_MEAL = (mealInfo: TypeMeal) => {
    setMeal(mealInfo);
  };

  const context: ThemeContextType = {
    meal: meal,
    SET_MEAL,
  };

  return (
    <shareContext.Provider value={context}>{children}</shareContext.Provider>
  );
};

export { ShareContextProvide, shareContext };
