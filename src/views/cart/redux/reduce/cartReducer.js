import {
  ADD_TO_CART_ACTION,
  REMOVE_FROM_CART_ACTION,
} from "../actions/actionType";

let initialState = {
  cartItemIdList: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART_ACTION:
      return {
        ...state,
        cartItemIdList: [...state.cartItemIdList, action.itemId],
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
