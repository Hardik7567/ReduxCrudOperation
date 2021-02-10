import { ADD_USER, UPDATE_USER, DELETE_USER } from "../constant";

export const AddItem = message => ({
  type: ADD_USER,
  message
});

export const DeleteItem = id => ({
  type: DELETE_USER,
  id
});

export const UpdateItem = (data, id) => {
  return {
    type: UPDATE_USER,
    data: data,
    id: id
  }
}
