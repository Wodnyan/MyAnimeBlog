import { createStore, combineReducers } from "redux";
import users from "./user/userReducer"

export default createStore(combineReducers({ users }));
