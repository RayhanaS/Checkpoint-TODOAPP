 import { ADD,DELETE, DONE} from './action-type';



 export const addHandler= (list) => {
      return {
          type : ADD ,
          payload : list,
           
      }
 }

 export const deleteHandler= (ID) => {
    return {
        type : DELETE ,
        payload : ID
    }
}

export const doneHandler= (list) => {
    return {
        type : DONE ,
        payload : list
    }
}



