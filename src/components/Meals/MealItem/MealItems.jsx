import React from 'react'
import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';

const MealItems = (props) => {
    const price = `$${props.price.toFixed(2)}`
  return (
    <div className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id}/>
        </div>

    </div>
  )
}

export default MealItems