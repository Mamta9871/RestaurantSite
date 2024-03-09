import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Banner from '../Images/Banner.jpg'


const Header = () => {
  return (
    <>
    <div className='navbar'>
        <h1 className='logo'>ResTaurant</h1>    
      <div className='Cart-style'>
      <ShoppingCartIcon id="Icon" fontSize='large'/> 
      <h1 className='cart'> Your Cart</h1>  
      </div>
    </div>
    <div >
      <img className='Banner' src={Banner} alt="Picture" />
    </div>
    </>
  )
}

export default Header