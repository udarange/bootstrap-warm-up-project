import {
  ADD_TO_CART_ACTION,
  FETCH_ITEM_LIST_ACTION,
  FETCH_ITEM_LIST_FAILURE_ACTION,
  FETCH_ITEM_LIST_SUCCESS_ACTION,
  REMOVE_FROM_CART_ACTION,
} from "../actions/actionType";

let initialState = {
  cartItemIdList: [],
  itemList: [],
  itemListIsLoading: false,
  itemListHasError: false,
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM_LIST_ACTION:
      return {
        ...state,
        itemListIsLoading: true,
        itemListHasError: false,
      };
    case FETCH_ITEM_LIST_SUCCESS_ACTION:
      return {
        ...state,
        itemList: action.itemList,
        itemListIsLoading: false,
        itemListHasError: false,
      };
    case FETCH_ITEM_LIST_FAILURE_ACTION:
      return {
        ...state,
        itemList: [],
        itemListIsLoading: false,
        itemListHasError: true,
      };
    case ADD_TO_CART_ACTION:
      return {
        ...state,
        cartItemIdList: state.cartItemIdList.push(action.itemId),
      };
    case REMOVE_FROM_CART_ACTION:
      return {
        ...state,
        cartItemIdList: state.cartItemIdList.filter(
          (el) => el !== action.itemId
        ),
      };
    default:
      return state;
  }
}
