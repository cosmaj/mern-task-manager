import React from 'react';

const CreateTask = () => {
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
                        <button type='button' className='btn btn-primary m-2'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateTask;