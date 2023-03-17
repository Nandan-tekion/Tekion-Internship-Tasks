import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    setCart(state, action) {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      if (exisitingItem) {
        exisitingItem.quantity++;
        exisitingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const item = state.items.find((item) => item.itemId === id);
      if (item.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        item.quantity--;
        item.totalPrice -= item.price;
      }
      state.totalQuantity--;
    },
  },
});



export const cartActions = cartSlice.actions;

export default cartSlice;
