import { User } from "../../types";
import { ActionTypes } from "./actionTypes";

export const addUser = (user: User) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: user,
  };
};
