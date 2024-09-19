import './Task.css';
import * as React from 'react';
interface Task {
    task: string;
    id: number;
    onDelete: React.MouseEventHandler;
}

const Task:React.FC<Task> = ({task, onDelete}) => {

       return (
           <div className="task">
                   <span className='taskSpan'>{task}</span>
                   <button type="button" className='btnDelete' onClick={onDelete}>Delete</button>
           </div>
       );
};

export default Task;