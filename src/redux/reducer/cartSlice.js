import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // items = { [productId]: { ...product, quantity } }
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const id = product.productId;   // ensure har productId unique ho
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { ...product, quantity: 1 };
      }
    },
    decreaseItem: (state, action) => {
      const id = action.payload;
      const item = state.items[id];
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        delete state.items[id];
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const {
  addItem,
  decreaseItem,
  removeItem,
  clearCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => Object.values(state.cart.items);

export const selectCartItemQuantity = (state, id) =>
  state.cart.items[id]?.quantity || 0;

export const selectCartTotalPrice = (state) =>
  Object.values(state.cart.items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

export default cartSlice.reducer; 