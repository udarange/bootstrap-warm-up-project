import { call, put } from "redux-saga/effects";
import {
  fetchItemListFailureAction,
  fetchItemListSuccessAction,
} from "../actions/itemAction";
import axios from "axios";

function fetchItemListData() {
  const options = {};

  return axios
    .get(
      "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments",
      options
    )
    .then((response) => response.data)
    .catch((error) => error);
}

export default function* callItemList(action) {
  try {
    const itemListData = yield call(fetchItemListData);
    yield put(fetchItemListSuccessAction(itemListData));
  } catch (e) {
    yield put(fetchItemListFailureAction());
  }
}
