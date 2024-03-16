import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <div>
        <button className={classes.CartStyle} onClick={props.onClickCart}>
            <div>
            <ShoppingCartIcon id="Icon" fontSize='large'/> 
            </div>
            <h1 className={classes.cart}> Your Cart <span>0</span></h1> 
            
      </button>
    </div>
  )
}

export default HeaderCartButton