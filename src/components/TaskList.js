import { useState } from 'react';
import { TaskCard } from './TaskCard';
import "./TaskList.css";

export const TaskList = ({tasks, setTasks}) => {

    const [show, setshow] = useState(true);
    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }
  return (
    <section className='tasklist'>
        <ul>
            <div className='header'>
                <h1>Task List</h1>
                <button className='trigger' onClick={() =>  setshow(!show)}>{show ? "hide Task" : "show Task"}</button>
            </div>
            {show && tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete = {handleDelete}/>
            ))}
        </ul>
    </section>
  )
}

