import React, { useState } from 'react'
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Banner from '../Images/Banner.jpg'


const Header = () => {
  const[cart,setCart]=useState(5)

  const HandleChange = (e) => {
    setCart(e.target.value)
    setCart(cart)

  }

  return (
    <>
    <div className='navbar'>
        <h1 className='logo'>ResTaurant</h1>    
      <button className='Cart-style' onClick={HandleChange}>
      <ShoppingCartIcon id="Icon" fontSize='large'/> 
      <h1 className='cart'> Your Cart <span>{cart}</span></h1> 
      </button>
    </div>
    <div >
      <img className='Banner' src={Banner} alt="Picture" />
    </div>
    </>
  )
}

export default Header