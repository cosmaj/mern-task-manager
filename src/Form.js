import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import axios from 'axios';
import Spinner from "./Spinner";

const Form = () => {

    const [taskName, setTaskName] = useState('')
    const [duration, setDuration] = useState('')
    const [completion, setCompletion] = useState(false)
    const [taskNameError, settaskNameError] = useState(false)
    const [durationError, setDurationError] = useState(false)
    const [taskCreateStatus, setTaskCreationStatus] = useState(0)
    const [loaderSpiner, setLoaderSpinner] = useState(false)

    const formReset = ()=>{
        setTaskName('')
        setDuration('')
        setCompletion(false)
        settaskNameError(false)
        setDurationError(false)
        setTaskCreationStatus(0)
    }

    const handleChangingTaskName = (e)=>{
        if (taskNameError === true) settaskNameError(false)
        setTaskName(e.target.value)
    }

    const handleChangingDuration = (e)=>{
        if (durationError === true) setDurationError(false)
        setDuration(e.target.value.trim())
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if (taskName.length < 3) settaskNameError(true)
        if (isNaN(duration) || (duration <= 0)) setDurationError(true)
        if (taskNameError === false && durationError === false) createNewTask()
    }

    const createNewTask = async()=>{
        let newTask = {
            "description": taskName.trim(),
            "duration": parseInt(duration),
            "completed": completion
        }
        try {
            let task = await axios.post('http://localhost:8000/api/v1/tasks', newTask)
            setTaskCreationStatus(1)
            setTimeout(()=>formReset(), 2000)
        } catch (error) {
            console.log(`Error Info: ${ error }`)
            setTaskCreationStatus(-1)
            setTimeout(()=>formReset(), 2000)
        }
    }

    return(
        <div className='container my-3 p-3'>
            <h3>Task Tracker Records</h3>
            { (taskCreateStatus === 1) &&  <Alert color="success" msg="Task Created Successfull!" />  }
            { (taskCreateStatus === -1) && <Alert color="danger" msg="Something went wrong" /> }
            <div className='justify-content-center'>
                <form className='w-100' id='taskForm' onSubmit={ handleFormSubmit }>
                    <div className='mb-3'>
                        <label htmlFor='taskName' className='form-label'>Task</label>
                        <input type='text' className='form-control' name='taskName' value={ taskName } onChange={ (e)=> handleChangingTaskName(e) }/>
                        { taskNameError && <small className="text-danger">Task Name should be 3+ alphanumeric</small> }
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='duration' className='form-label'>Duration in minutes</label>
                        <input type='number' className='form-control' name='duration' value={ duration } onChange={ (e)=> handleChangingDuration(e) } />
                        { durationError && <small className="text-danger">Task duration should be greter than 0</small> }
                    </div>
                    <div className='form-check form-switch mb-3'>
                        <label htmlFor='completion' className='form-check-label'>Task completed?</label>
                        <input type='checkbox' className='form-check-input' name='completion' value={ completion } role='switch' onChange={ (e)=> setCompletion(e.target.checked ? true: false) }/>
                    </div>
                    <div className='mb-3'>
                        <input type='reset' className='btn btn-danger m-2' onClick={ formReset } value='Reset' />
                        <button type='submit' className='btn btn-primary m-2' >Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;