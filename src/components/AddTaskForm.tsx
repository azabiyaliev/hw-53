import './AddTaskForm.css';
import * as React from 'react';

interface AddTaskForm {
    input: React.ChangeEvent<HTMLInputElement>;
    onAdd: React.MouseEventHandler;
}

const AddTaskForm: React.FC<AddTaskForm> = ({input, onAdd}) => {
    return (
        <div className='taskDiv'>
            <input id='input' value={input} placeholder="Add new task" className="taskInput" />
            <button type='button' className='btnAdd' onClick={onAdd}>Add</button>
        </div>
    );
};

export default AddTaskForm;