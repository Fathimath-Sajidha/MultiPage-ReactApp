import React from "react";
import "./TodolistMain.css";
import { useState } from "react";
import Todolist from "../TodoListitems/Todolist.jsx";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";

function TodoListMain() {
  const [todos, setTodos] = useState([])
  const [newInput, setInput] = useState('')
  const handleInputChange = (event) => {
    setInput(event.target.value)
  }
  const addNewTodo = () => {
    setTodos([...todos,{ label:newInput, completed: false }]);
    setInput("")
  };
  const makeDone = (index) => {
    const temporary = [...todos]
    temporary[index].completed = true
    setTodos(temporary)
  }
  const deleteTodo = (index) => {
    const temp = [...todos]
    temp.splice(index, 1)
    setTodos(temp)
  }
  return (
    <div className='app-container'>
      <div className='todo-box'>
        <div className='inputArea'></div>
        <br></br>
          <input  type="text" onChange={handleInputChange} value={newInput}  placeholder='Add a task'/>
          <IconButton onClick={addNewTodo}  > <AddTaskIcon/></IconButton> 
                   <br/>
          <br/>
          {todos.map((ele, index) => <Todolist label={ele.label} count={index} key={index} completed={ele.completed} makeDone={makeDone} deleteTodo={deleteTodo} />)}
        
      </div>
     
       

  
    </div>
  );
}

export default TodoListMain;
