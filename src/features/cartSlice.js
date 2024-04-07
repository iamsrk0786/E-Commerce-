import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";
const initialState = {
  cart: [],
  items: ProductData,

  totalQuantity: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      let find = state.cart.findIndex((item) => item.Id === action.payload.Id);
      if (find >= 0) {
        state.cart[find].Quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("cartTotal", cartTotal);
          console.log("cartItem", cartItem);
          const { PRICE, Quantity } = cartItem;
          console.log(PRICE, Quantity);
          const itemTotal = PRICE * Quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += Quantity;

          return cartTotal;
        },
        {
          totalQuantity: 0,
          totalPrice: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.Id !== action.payload);
    },

    increment: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.Id === action.payload) {
          return { ...item, Quantity: item.Quantity + 1 };
        }
        return item;
      });
    },
    decrement: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.Id === action.payload) {
          return { ...item, Quantity: item.Quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addtocart,
  getCartTotal,
  removeFromCart,
  increment,
  decrement,
} = cartSlice.actions;

export default cartSlice.reducer;

