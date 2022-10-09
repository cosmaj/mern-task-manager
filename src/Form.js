import React, { useState } from "react";

const Form = () => {

    const [inputs, setInputs] = useState({})

    const handleChange = (e)=>{
        const name = e.target.name
        const value  =  e.target.value
        setInputs(values => ({...values,  [name]: value }))
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(inputs)
    }

    return(
        <div className='container my-3 p-3'>
            <h3>Task Tracker Records</h3>
            <div className='justify-content-center'>
                <form className='w-100' id='taskForm' onSubmit={ handleFormSubmit }>
                    <div className='mb-3'>
                        <label htmlFor='taskName' className='form-label'>Task</label>
                        <input type='text' className='form-control' name='userName' value={ inputs.userName || ""} onChange={ handleChange }/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='duration' className='form-label'>Duration in minutes</label>
                        <input type='number' className='form-control' name='duration' value={inputs.duration || ""} onChange={ handleChange } />
                    </div>
                    <div className='form-check form-switch mb-3'>
                        <label htmlFor='completion' className='form-check-label'>Task completed?</label>
                        <input type='checkbox' className='form-check-input' name='completion' value={inputs.completion || ""} role='switch' onChange={ handleChange }/>
                    </div>
                    <div className='mb-3'>
                        <input type='reset' className='btn btn-danger m-2' value='Reset' />
                        <button type='button' className='btn btn-primary m-2' >Save</button>
                        <button type='button' className='btn btn-success m-2' >Delete</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;