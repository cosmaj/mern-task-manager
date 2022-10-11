import React from "react"

const Alert = (props)=>{
    let className = 'alert alert-dismissible alert-'
    className += props.color
    return(
        <div className={ className }>
            <button type='button' className='btn-close' data-bs-dismiss='alert'></button>
            { props.msg }
        </div>
    );
}

export default Alert