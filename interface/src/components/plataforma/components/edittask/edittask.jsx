import React from 'react';
import './edittask.css'
import { AiOutlineCloseSquare } from 'react-icons/ai'

const Edittask = () => {
    return (
        <div className='edittask-component'>
            <div className='edittask-top'>
                <h1>Edit your task</h1>
                <AiOutlineCloseSquare className='close-form' />
            </div>
            <form className='edittask-form' action="" method='put' >
                <input type="text" className='tittle' placeholder='Tittle Task' />
                <textarea className='content' placeholder='Content Task' />
                <fieldset className='addtask-fieldset'>
                    <legend>Task Completed</legend>
                    <input type="radio" checked name="completedtask" />
                    <input type="radio" checked name="completedtask" />
                </fieldset>

                <input id='submit' className='finish-form' type="submit" value='Finish' />
            </form>
        </div>
    );
}

export default Edittask;