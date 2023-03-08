import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "add") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exisitingCartItem = state.items[exisitingCartItemIndex];
    let updatedItems;
    if (exisitingCartItem) {
      const updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "remove") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exisitingCartItem = state.items[exisitingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - exisitingCartItem.price;
    let updatedItems;

    if (exisitingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      exisitingCartItem.amount -= 1;
      updatedItems = [...state.items];
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCarthandler = (item) => {
    dispatchCartState({
      type: "add",
      item: item,
    });
  };

  const removeItemFromCarthandler = (id) => {
    dispatchCartState({
      type: "remove",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCarthandler,
    removeItem: removeItemFromCarthandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
