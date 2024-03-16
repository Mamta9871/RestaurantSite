import {useContext} from 'react'
import CartContext from '../store/cart-context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const numOfCartItems = cartCtx.items.reduce((curNum,item)=>{
    return curNum + item.amount
  },0)

  return (
    <div>
        <button className={classes.CartStyle} onClick={props.onClickCart}>
            <div>
            <ShoppingCartIcon id="Icon" fontSize='large'/> 
            </div>
            <h1 className={classes.cart}>Your Cart</h1> 
            <span>{numOfCartItems}</span>
      </button>
    </div>
  )
}

export default HeaderCartButton