import { ADD_USER } from "../constant";
import {saveUser} from '../Action/LoginAction';

const initialState = {
user:[]

};

export default function (state = initialState, action) {
  if(action.type==='SUBMIT'){
    return  action.payload

  }
  return state;

  // switch (action.type) {
  //   case ADD_USER:
  //     return {
  //       ...state,
  //       user: action.data
  //     };
  //     break;
  //   default:
  //     return state;
  // }
}
