import {
  ADD_TO_CART_ACTION,
  FETCH_ITEM_LIST_ACTION,
  FETCH_ITEM_LIST_FAILURE_ACTION,
  FETCH_ITEM_LIST_SUCCESS_ACTION,
  REMOVE_FROM_CART_ACTION,
} from "./actionType";

export const fetchItemListDataAction = () => ({
  type: FETCH_ITEM_LIST_ACTION,
});

export const fetchItemListSuccessAction = (itemList) => ({
  type: FETCH_ITEM_LIST_SUCCESS_ACTION,
  itemList,
});

export const fetchItemListFailureAction = () => ({
  type: FETCH_ITEM_LIST_FAILURE_ACTION,
});

export const addToCartAction = (itemId) => ({
  type: ADD_TO_CART_ACTION,
  itemId,
});

export const removeFromCartAction = (itemId) => ({
  type: REMOVE_FROM_CART_ACTION,
  itemId,
});
