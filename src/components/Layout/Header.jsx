import React from 'react';
import classes from './Header.module.css';
import Banner from '../assets/Banner.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1 className={classes.logo}>ResTaurant</h1>    
        <HeaderCartButton onClickCart={props.onShowCart}/>
    </header>
    <div >
      <img className={classes.Banner} src={Banner} alt="here is good" />
    </div>
    </>
  )
}

export default Header