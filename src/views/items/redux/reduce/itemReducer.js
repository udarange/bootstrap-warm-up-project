import {
  FETCH_ITEM_LIST_ACTION,
  FETCH_ITEM_LIST_FAILURE_ACTION,
  FETCH_ITEM_LIST_SUCCESS_ACTION,
} from "../actions/actionType";

let initialState = {
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
    default:
      return state;
  }
}
