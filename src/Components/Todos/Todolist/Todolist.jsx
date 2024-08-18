import React from 'react'
import './Todolist.css';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DoneIcon from '@mui/icons-material/Done';




function Todolist({ count, label, completed, makeDone, deleteTodo }) {
    return (
        <div className='listItem'>
            <h3>{count + 1}.{label}</h3>
            <IconButton onClick={() => deleteTodo(count)}> <DeleteIcon /></IconButton>
             {!completed && <IconButton  onClick={() => makeDone(count)}><DoneIcon /></IconButton>}
        
      
      <IconButton>
        <CheckBoxIcon />
      </IconButton>



        </div>
    )
}
export default Todolist 