import { ADD,DELETE , DONE} from './action-type';



const initialState ={
    TODOS:[
   
   ],  
 
}

 export const reducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD: 
        console.log(action.payload)
             return {
               ...state,
               TODOS : [...state.TODOS,action.payload ]

        }

        case DELETE: 
        return {
          ...state,
          TODOS : state.TODOS .filter ((element) => element.id !== action.payload)

        }
        case DONE: 
             return {
               ...state,
               TODOS : action.payload.map(todo => todo) 

        }

        

            default: return state 
           
    }
 }