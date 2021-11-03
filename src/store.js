import { applyMiddleware, combineReducers, createStore } from "redux";
import itemReducer from "./views/items/redux/reduce/itemReducer";
import createSagaMiddleware from "redux-saga";
import { spawn } from "redux-saga/effects";
import itemSaga from "./views/items/redux/sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  itemReducer,
});

function* rootSaga() {
  yield spawn(itemSaga);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
