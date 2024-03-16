import classes from './MenuItems.module.css';
import MealItems from './MealItem/MealItems'
import Card from '../UI/Card';

const Items = [
    {
        id: 'm1',
        name: 'South Food',
        description: 'Delicious Food',
        price: 100,
    },
    {
        id: 'm2',
        name: 'Veg Thaali',
        description: 'Delicious Food',
        price: 120,
    },
    {
        id: 'm3',
        name: 'Saahi Panner',
        description: 'Delicious Food',
        price: 250,
    },
    {
        id: 'm4',
        name: 'Chilli Potato',
        description: 'Delicious Food',
        price: 80,
    },
    {
        id: 'm5',
        name: 'Veg Momos',
        description: 'Delicious Food',
        price: 200,
    }  
]
const MenuItems = () => {
    
    const mealitems = Items.map((meal)=>(
        <MealItems
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}  
        />
    ))

    
  return (
    <section className={classes.MealItems}>
        <Card>
            <ul>{mealitems}</ul>
        </Card>
    </section>
  )
}

export default MenuItems