import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {



  const cartCtx = useContext(CartContext);

  const[isBump, setIsBump] =   useState(false);

  useEffect(()=> {
    if(cartCtx.items.length === 0)return;

    setIsBump(true);

    const timer = setTimeout(()=> setIsBump(false),300);

    return ()=> {
      clearTimeout(timer);
    }

  },[cartCtx.items])

  const btnClasses = `${styles.button} ${isBump ? styles.bump : ''}`

  const numberOfItems = cartCtx.items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
