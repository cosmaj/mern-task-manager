import axios from 'axios';
import React, { useState } from 'react';

const CreateTask = () => {
    let [taskCount, taskCountIncrement, taskCountDecrement] = useState(0)
    let [taskNameError, setTaskNameError] = useState(false)
    let [taskDurationError, setTaskDurationError] = useState(false)
    
    taskCountIncrement = ()=>{
        taskNameError = false;
        taskDurationError = false;
        let taskName = document.getElementById('taskName');
        let taskDuration = document.getElementById('duration');
        
        if (taskName.value.trim().length < 3) setTaskNameError()
        if (!isNaN(taskName.value)) setTaskNameError()
        if ( (taskDuration.value < 0) || (taskDuration.value.trim().length < 1)) setTaskDurationError()
        
        if(taskNameError !== false || taskDurationError !== false) {
            console.log(`Errors found`)
        } else{
            let newTask = {
                "description": taskName.value.trim(),
                "duration": taskDuration.value.trim(),
                "completed": (document.getElementById('completion').checked ? true : false)
            }
            createNewTask(newTask)
        }
    }

    taskCountDecrement = ()=>{
        console.log(`OG count: ${ taskCount }`)
        taskCount--
        console.log(`After count: ${ taskCount }`)
    }

    setTaskNameError = () => {
        taskNameError = 'Task name should be 3+ alphanumeric'
    }

    setTaskDurationError = () => {
        taskDurationError = 'Task Duration should be greater than or equal to 0';
    }

    const createNewTask = async(newTask)=>{
        try {
            let task = await axios.post('http://localhost:8080/api/v1/tasks', newTask)
            console.log(task)
        } catch (error) {
            console.log(`Something went wrong`)
        }
    }
    return (
        <div className='container my-3 p-3'>
            <h3>Task Tracker Records</h3>
            <div className='justify-content-center'>
                <form className='w-100'>
                    <div className='mb-3'>
                        <label htmlFor='taskName' className='form-label'>Task</label>
                        <input type='text' className='form-control' id='taskName' name='taskName' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='duration' className='form-label'>Duration in minutes</label>
                        <input type='number' className='form-control' id='duration' name='duration' />
                    </div>
                    <div className='form-check form-switch mb-3'>
                        <label htmlFor='completion' className='form-check-label'>Task completed?</label>
                        <input type='checkbox' className='form-check-input' id='completion' name='completion' role='switch' />
                    </div>
                    <div className='mb-3'>
                        <input type='reset' className='btn btn-danger m-2' value='Reset' />
                        <button type='button' className='btn btn-primary m-2' onClick={ taskCountIncrement }>Save</button>
                        <button type='button' className='btn btn-success m-2' onClick={ taskCountDecrement }>Delete</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateTask;