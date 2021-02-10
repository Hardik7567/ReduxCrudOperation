
const initialState = {

  data: [],

}


const todo = (state = initialState, action) => {

  switch (action.type) {

    case "ADD_USER":
      return {
        ...state,
        data: [...state.data, action.message],
      };


    case "UPDATE_USER":
      let oldValue = state.data.find(data => data.Id === action.id)
      const index = state.data.findIndex(data => data.Id === action.id)
      oldValue.Email = action.data.Email
      oldValue.Password = action.data.Password
      const NewArray = state.data
      NewArray[index] = oldValue
      return {
        ...state,
        data: NewArray
      };

    case "DELETE_USER":


      return {
        ...state,
        data: [...state.data.filter((todo) => todo.Id !== action.id)],

      };

    default:
      return state
  }

};

export default todo;