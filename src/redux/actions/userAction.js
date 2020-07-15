import { USER_DATA } from "../types/type";

export function userData(massege, firstName, lastName, id) {
  return {
    type: USER_DATA,
    massege: massege,
    firstName: firstName,
    lastName: lastName,
    id: id,
  };
}
