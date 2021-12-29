import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
    allProduct: [],
  },
  reducers: {
    addToBasktet: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    addToAllProduct: (state, action) => {
      state.allProduct = action.payload;
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      const newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("not existed product id");
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasktet, removeFromBasket, addToAllProduct } =
  basketSlice.actions;
export const selectItems = (state) => state.items;
export const selectTotal = (state) =>
  state.items.reduce((total, items) => items.price + total, 0);
export const selectAllProducts = basketSlice.actions;

export default basketSlice.reducer;
