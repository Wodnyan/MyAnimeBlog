import { ActionTypes } from "./actionTypes";
import { User } from "../../types";

type Action =
  | { type: ActionTypes.ADD_USER; payload: User }
  | { type: ActionTypes.REMOVE_USER };

type State = User | null;

export default function userReducer(state: State = null, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return action.payload;
    case ActionTypes.REMOVE_USER:
      return null;
    default:
      return state;
  }
}
