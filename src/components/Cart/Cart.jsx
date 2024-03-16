import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = (props) => {
    const cartItems = (
<<<<<<< HEAD
      <ul className={classes['cartItems']}>
        {[{
        id: "m1",
        name: "South Food",
        amount: 100,
        price: 100,
        }].map((item)=> (<li key={item.id}>{item.name}</li>))}
=======
      <ul className={classes['cart-items']}>
        {[{
        id: "c1",
        name: "Mamta",
        amount: 100,
        price: 120,
        }].map((item)=> (<li>{item.name}</li>))}
>>>>>>> 5ab3a832b4e8be37bb1b74a2dc69e597a6337f72
      </ul>
      )
    
  return (
<<<<<<< HEAD
    <Modal className={classes.Cart} onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
         <p>Total Amount</p>
         <p>100</p>
=======
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
         <span>Total Amount</span>
         <span>100.20</span>
>>>>>>> 5ab3a832b4e8be37bb1b74a2dc69e597a6337f72
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
        
  )
}

export default Cart