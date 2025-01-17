import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meals"
import { Suspense } from "react";

async function Meal(){
    const meals = await getMeals();
    return <MealsGrid meals={meals}/> 
}

export default function MealPage(){

  return (
    <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created{' '} 
        <span className={classes.highlight}> by you </span>
      </h1>  
      <p>
        Choose you favourite recipe and cook it by yourself. It is easy and fun 
      </p>
      <p className={classes.cta}>
        <Link href="/meals/share">
          Share Your Favourite Recipe
        </Link>
      </p>
    </header> 
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
      <Meal/> 
      </Suspense>
    </main>   
    </>
  )
}
