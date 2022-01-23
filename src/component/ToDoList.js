import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {deleteHandler,doneHandler} from '../Redux/action';

function ToDoList() {
  const dispatch = useDispatch()
  const task = useSelector (state => state.TODOS)
  
  const removeTask = (ID) => {
    dispatch(deleteHandler(ID))
  }
  const done = (ID) => {
    task?.map((task) => {
      if(task.id === ID){
        task.isDone = !task.isDone
      }
    })
    
    dispatch(doneHandler(task))
  }
  return (  
 <div>
    {task?.map (todo=> <li>
      {task.isDone ? <span className="done">{todo.text} </span> : <span className="not-done">{todo.text} </span>}
    <Button variant="outline-danger" onClick={()=>removeTask(todo.id)}><i className="fas fa-trash-alt"></i></Button>
    <Button variant="outline-danger" onClick={()=>done(todo.id)}><i class="fas fa-check"></i></Button>
    </li>)}
    
</div>)

}

export default ToDoList;

