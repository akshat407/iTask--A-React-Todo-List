import React, { useState } from 'react';

const Todo = () => {

    const [task, settask] = useState([])
    const [newTask, setnewTask] = useState("")


    function handlChange(e){
        setnewTask(e.target.value)

    }
    function addtask()
    {
        if(newTask.trim()!=="")
        {
            settask(t=>[...t,newTask])
        setnewTask("")
        }

    }
    function deleteTask(index){

        const updateTask=task.filter((_, target)=> target!==index)
        settask(updateTask)

    }
    function moveTaskUp(index){
        if(index>0)
        {const updatedTask=[...task];
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
        settask(updatedTask);}

    }
    function moveTaskDown(index){
        if(index<task.length-1)
            {const updatedTask=[...task];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
            settask(updatedTask);}

    }


    
  return (
    <div className="todo-list">
        <h1>Todo List</h1>

        <div>
            <input 
                type="text"
                placeholder='Enter the task...'
                value={newTask}
                onChange={handlChange} />
                <button onClick={addtask} className="add-btn">Add</button>
        </div>
        <ol>
            {task.map((element,index)=>
            <li key={index}>
                <span className='element-item'>{element}</span>
                <button onClick={()=>deleteTask(index)} className='delete-btn'>Delete</button>
                <button onClick={()=>moveTaskUp(index)} className='moveup-btn'>👆</button>
                <button onClick={()=>moveTaskDown(index)} className='movedown-btn'>👇</button>
            </li>
            )}
        </ol>
    </div>
  )
}

export default Todo
