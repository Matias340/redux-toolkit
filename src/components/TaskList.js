import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from "../feature/task/taskSlice";
import { Link } from 'react-router-dom';

function TaskList() {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>

      <header>
       <h1>Tasks {tasks.length}</h1>
       <Link to='/create-task'>
          Create Task
       </Link>
      </header>

       {tasks.map(task => (
         <div key={task.id}>
           <h3>{task.title}</h3>
           <p>{task.description}</p>
           <button onClick={() => handleDelete(task.id)}>delete</button>
           <Link to={`/edit-task/${task.id}`}>Edit</Link>
         </div>
       ))} 
    </div>
  )
}

export default TaskList