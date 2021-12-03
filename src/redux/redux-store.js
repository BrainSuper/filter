import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from "./users-reducer"
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  usersPage: usersReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;