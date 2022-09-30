import React from 'react';

const Footer = () => {
    return (
        <div className='container'>
            <footer className='py-3 my-4'>
                <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li className='nav-item'>
                        <a href='#' className='nav-link px-2' target='_blank'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://github.com/cosmaj/mern-task-manager' className='nav-link px-2' target='_blank'>Repository</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link px-2' target='_blank'>Contuct me</a>
                    </li>
                </ul>
                <p className='text-center text-muted'>&copy; 2022 cosmaj</p>
            </footer>
        </div>
    );
}

export default Footer;