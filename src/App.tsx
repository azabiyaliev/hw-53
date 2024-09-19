import './App.css';
import './components/AddTaskForm.tsx';
import AddTaskForm from './components/AddTaskForm.tsx';
import Task from './components/Task.tsx';
import {useState} from 'react';


const App = () => {

    const [tasks] = useState<Task[]>(
        [
            {task: 'Buy milk',id:1 },
            {task: 'Walk with dog',id:2 },
            {task: 'Do homework',id:3 },]);

    const addTask = tasks.map(task => {
        console.log(task.task);
        return (
            <Task task={task.task} id={task.id} key={task.id}/>
        );
    });

    return (
        <>
            <div className='container'>
                <AddTaskForm/>
                {addTask}
            </div>
        </>
    );
};

export default App;
