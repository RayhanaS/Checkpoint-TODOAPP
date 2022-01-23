import React from 'react';
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {addHandler} from '../Redux/action';

function AddList() {
    const dispatch = useDispatch ()
    const [newtodo,setNewToDo] = useState ("")
    const handelClick = () =>  {
       dispatch(addHandler({text:newtodo,id:Math.random(),isDone:false}))
    }
  return (
  <div>
      <input type="text"  value = {newtodo}  onInput ={(e) => setNewToDo (e.target.value)}  />
      <Button onClick={handelClick}> ADD TO DO LIST </Button>
  </div>)
}

export default AddList;
