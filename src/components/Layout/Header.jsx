import React, { Fragment } from 'react';
import classes from './Header.module.css';
import Banner from '../assets/Banner.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
    <header className={classes.header}>
        <h1 className={classes.logo}>ResTaurant</h1>    
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div >
      <img className={classes.Banner} src={Banner} alt="here is good" />
    </div>
    </Fragment>
  )
}

export default Header