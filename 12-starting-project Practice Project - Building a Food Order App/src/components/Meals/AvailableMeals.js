import React, {useState, useEffect} from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../UI/Card';



export const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
      const fetchMeals = async () => {
        const response = await fetch(
          'https://react-http-4e716-default-rtdb.firebaseio.com/meals.json'
        );

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const responseData = await response.json();

        const loadedMeals = [];

        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }

        setMeals(loadedMeals);
        setIsLoading(false);
      };

      fetchMeals().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
    }, []);

    if (isLoading) {
      return (
        <section className={classes.MealsLoading}>
          <p>Loading...</p>
        </section>
      );
    }

    if (httpError) {
      return (
        <section className={classes.MealsError}>
          <p>{httpError}</p>
        </section>
      );
    }
    const addToCard = (meal) =>{
        // SetAddToCartList((preMeals) => {return [meal, ...preMeals]});
    }
    const mealsList = meals.map(meal => <MealItem addToCard={addToCard} id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
    return (
        <Card className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </Card>
    )
}
