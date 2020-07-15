import { USER_DATA } from "../types/type";
import { combineReducers } from "redux";

export default function User(state = {}, action) {
  switch (action.type) {
    case USER_DATA:
      return [
        Object.assign(state, {
          massege: action.massege,
          firstName: action.firstName,
          lastName: action.lastName,
          id: action.id,
        }),
      ];
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  user: User,
});
