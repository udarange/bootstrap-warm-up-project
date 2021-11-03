import {
  FETCH_ITEM_LIST_ACTION,
  FETCH_ITEM_LIST_FAILURE_ACTION,
  FETCH_ITEM_LIST_SUCCESS_ACTION,
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
