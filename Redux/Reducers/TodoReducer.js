
const initialState = {

   data :  [],

}

   
const todo = (state = initialState , action ) => {
 
     console.log('action',state);
      switch (action.type) {

        case "ADD_USER":
        return {
            ...state,
            data: [ ...state.data, action.message ],
        };
   
         console.log('add todo',ADD_USER);
         
        case "UPDATE_USER":
        return { 
          ...state,
          data : [...state.data.filter((todo.Id !==action.id)), {todo:action.message} ]
        };

        case "DELETE_USER":
        return {
          ...state , 
          data : [...state.data.filter((todo)=>todo.Id !== action.id )],
            
        };

        default : 
        return state
      }

};

export default todo;