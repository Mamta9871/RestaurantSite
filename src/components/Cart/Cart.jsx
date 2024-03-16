import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = (props) => {
    const cartItems = (
      <ul className={classes['cartItems']}>
        {[{
        id: "m1",
        name: "South Food",
        amount: 100,
        price: 100,
        }].map((item)=> (<li key={item.id}>{item.name}</li>))}
      </ul>
      )
    
  return (
    <Modal className={classes.Cart} onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
         <p>Total Amount</p>
         <p>100</p>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
        
  )
}

export default Cart