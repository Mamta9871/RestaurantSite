import React from 'react'
import './MealItems.css';

const Items = [
    {
        id: 1,
        name: 'South Food',
        description: 'Delicious Food',
        price: 100,
    },
    {
        id: 2,
        name: 'Veg Thaali',
        description: 'Delicious Food',
        price: 120,
    },
    {
        id: 3,
        name: 'Saahi Panner',
        description: 'Delicious Food',
        price: 250,
    },
    {
        id: 4,
        name: 'Chilli Potato',
        description: 'Delicious Food',
        price: 80,
    },
    {
        id: 5,
        name: 'Veg Momos',
        description: 'Delicious Food',
        price: 200,
    }  
]
const MealItems = () => {
    
  return (
    <>
    <section className='MealItems'>
        <ul>{Items.map((val)=>
            <li>
                {val.name}
                <br/>
                {val.description}
                <br />
                Rs.{val.price}
                <hr />
            </li>
        )}</ul>
    </section>
    </>
  )
}

export default MealItems