import axios from 'axios';
import React, { useState } from 'react';

const CreateTask = ()=>{
    let [taskCount, taskCountIncrement, taskCountDecrement] = useState(0)
    let [taskNameError, setTaskNameError] = useState(false)
    let [taskDurationError, setTaskDurationError] = useState(false)
    let [taskMessage, setTaskMessage] = useState(false)
    
    taskCountIncrement = ()=>{
        taskNameError = false;
        taskDurationError = false;
        let taskName = document.getElementById('taskName');
        let taskDuration = document.getElementById('duration');
        
        if (taskName.value.trim().length < 3 || (!isNaN(taskName.value))) setTaskNameError('Task name should be 3+ alphanumeric')
        //if (!isNaN(taskName.value)) setTaskNameError('Task Duration should be greater than or equal to 0')
        if ( (taskDuration.value < 0) || (taskDuration.value.trim().length < 1)) setTaskDurationError('Task Duration should be greater than or equal to 0')
        
        if(taskNameError !== false || taskDurationError !== false) {
            console.log(`Errors found`)
        } else{
            let newTask = {
                "description": taskName.value.trim(),
                "duration": parseInt(taskDuration.value.trim()),
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

    // setTaskNameError = () => {
    //     taskNameError = 'Task name should be 3+ alphanumeric'
    // }

    // setTaskDurationError = () => {
    //     taskDurationError = 'Task Duration should be greater than or equal to 0';
    // }

    const createNewTask = async(newTask)=>{
        try {
            let task = await axios.post('http://localhost:8000/api/v1/tasks', newTask)
            formReset()
            setTaskMessage(true)
            console.log(task)
        } catch (error) {
            setTaskMessage('Something went wrong')
        }
    }

    const formReset = ()=>{
        document.getElementById('taskForm').reset()
        document.getElementById('taskName').focus()
    }

    const SuccessMessage = (props)=>{
        return (
                <div className='alert alert-success alert-dismissible'>
                    <button type='button' className='btn-close' data-bs-dismiss='alert'></button>
                    { props.msg }
                </div>
        );
    }
    
    const FailedMessage = (props)=>{
        return (
                <div className='alert alert-danger alert-dismissible'>
                    <button type='button' className='btn-close' data-bs-dismiss='alert'></button>
                    { props.msg }
                </div>
        );
    }

    return (
        <div className='container my-3 p-3'>
            <h3>Task Tracker Records</h3>
            { (taskMessage === true ) ? <SuccessMessage msg="Task created successfuly!"/> : <FailedMessage msg="Something went wrong"/> }
            <div className='justify-content-center'>
                <form className='w-100' id='taskForm'>
                    <div className='mb-3'>
                        <label htmlFor='taskName' className='form-label'>Task</label>
                        <input type='text' className='form-control' id='taskName' name='userName' />
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