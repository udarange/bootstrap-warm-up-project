import { takeLatest } from "redux-saga/effects";
import { FETCH_ITEM_LIST_ACTION } from "../actions/actionType";
import callItemList from "./callItemList";

export default function* itemSaga() {
  yield takeLatest(FETCH_ITEM_LIST_ACTION, callItemList);
}
