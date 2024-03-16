import React, { useState } from 'react'
import './MealItems.css';
import Add from '../Button/Add';

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
    <div className='MealItems'>
        <ul>{Items.map((item)=>
            <li key={item.id}>
                <div className='item-info'>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Rs.{item.price}</p>
                </div>
                <br />
                <hr />
                <div className='item-actions'>
                <Add id={item.id}/>
                </div>
            </li>
        )}</ul>
    </div>
  )
}

export default MealItems