import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItem") !== null
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];
const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;
const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const initialState = {
  cartItem: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItem.push(newItem);
        newItem.quantity = 1;
      } else {
        existingItem.quantity++;
        existingItem.totalQuantity =
          Number(existingItem.totalprice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cartItem.map((item) => item))
      );

      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },

    remove(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== newItem.id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalQuantity =
          Number(existingItem.totalprice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cartItem.map((item) => item))
      );

      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },
  },
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;
