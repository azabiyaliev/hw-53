import './App.css';
import './components/AddTaskForm.tsx';
import AddTaskForm from './components/AddTaskForm.tsx';
import Task from './components/Task.tsx';
import {useState} from 'react';



const App = () => {

    const [tasks, setTasks] = useState<Task[]>(
            [{task: 'Buy milk', id: 1},
            {task: 'Walk with dog', id: 2},
            {task: 'Do homework', id: 3}]);

    const deleteTask = (id: number) => {
        const index = tasks.findIndex(task => task.id === id);
        const copyTasks = [...tasks];
        copyTasks.splice((index), 1);
        console.log(index);

        setTasks(copyTasks);
    };

    const addTaskButton = (e) => {
        console.log(e.target.value);
        console.log('clicked add task');
        const newTasks: Task[] = [];
        const copyTasks = [...tasks];
        const addTasks = tasks.map(task => {
            console.log(newTasks);
        });
    };

    const addTask = tasks.map(task => {
        console.log(task.task);
        return (
                <Task task={task.task} id={task.id} key={task.id} onDelete={deleteTask}/>
        );
    });


    return (
        <>
            <div className='container'>
                    <AddTaskForm onAdd={e =>  addTaskButton(e)}/>
                {addTask}
            </div>
        </>
    );
};

export default App;
