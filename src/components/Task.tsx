import './Task.css';
import * as React from 'react';
interface Task {
    task: string;
    id: number;
}

const Task:React.FC<Task> = ({task}) => {

       return (
           <div className="task">
               <span className='taskSpan'>{task}</span>
           </div>
       );
};

export default Task;