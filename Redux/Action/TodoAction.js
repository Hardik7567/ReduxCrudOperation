import { ADD_USER, UPADATE_USER, DELETE_USER } from "../constant";

export const AddItem = message => ({
  type: ADD_USER,
  message
});

export const DeleteItem = id => ({
  type: DELETE_USER,
  id
});

export  const UpdateItem = ({message, id}) => ({
  type : UPDATE_USER,
  message,
  id
});
