import { ADD_TO_CART_ACTION, REMOVE_FROM_CART_ACTION } from "./actionType";

export const addToCartAction = (itemId) => ({
  type: ADD_TO_CART_ACTION,
  itemId,
});

export const removeFromCartAction = (itemId) => ({
  type: REMOVE_FROM_CART_ACTION,
  itemId,
});
