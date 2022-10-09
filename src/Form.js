import React, { useState } from "react";

const Form = () => {

    const [taskName, setTaskName] = useState('')
    const [duration, setDuration] = useState('')
    const [completion, setCompletion] = useState(false)


    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(taskName, duration, completion)
    }

    return(
        <div className='container my-3 p-3'>
            <h3>Task Tracker Records</h3>
            <div className='justify-content-center'>
                <form className='w-100' id='taskForm' onSubmit={ handleFormSubmit }>
                    <div className='mb-3'>
                        <label htmlFor='taskName' className='form-label'>Task</label>
                        <input type='text' className='form-control' name='taskName' value={ taskName } onChange={ (e)=> setTaskName(e.target.value) }/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='duration' className='form-label'>Duration in minutes</label>
                        <input type='number' className='form-control' name='duration' value={ duration } onChange={ (e)=> setDuration(e.target.value) } />
                    </div>
                    <div className='form-check form-switch mb-3'>
                        <label htmlFor='completion' className='form-check-label'>Task completed?</label>
                        <input type='checkbox' className='form-check-input' name='completion' value={ completion } role='switch' onChange={ (e)=> setCompletion(e.target.checked ? true: false) }/>
                    </div>
                    <div className='mb-3'>
                        <input type='reset' className='btn btn-danger m-2' value='Reset' />
                        <button type='submit' className='btn btn-primary m-2' >Save</button>
                        <button type='button' className='btn btn-success m-2' >Delete</button>
                    </div>
                    <p>
                        Task: { taskName } <br />
                        Duration: { duration } <br />
                        Completion: { completion }
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Form;