<<<<<<< HEAD
import {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const[cartIsShown,setCartIsShown] = useState(false)
=======
import { useState } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const[cartIsShown,setCartIsShown]=useState(false)
>>>>>>> 5ab3a832b4e8be37bb1b74a2dc69e597a6337f72

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
   return (
<<<<<<< HEAD
    <Fragment>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Meals/>
    </main>
    </Fragment>
=======
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
    <Meals/>
    </main>
    </CartProvider>
>>>>>>> 5ab3a832b4e8be37bb1b74a2dc69e597a6337f72
  );
}

export default App;
