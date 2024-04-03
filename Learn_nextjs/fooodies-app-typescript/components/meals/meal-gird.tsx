import MealItem from './meal-item';
import classes from './meals-grid.module.css'


interface MealsType {
  id: string;
  title: string;
  slug: number;
  image: string;
  summary: number;
  creator: string;
}
interface MealGirdProps {
  meals: MealsType[];
}

export default function MealGird({ meals }: MealGirdProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}><MealItem {...meal}/></li>
      ))}
    </ul>
  );
}
