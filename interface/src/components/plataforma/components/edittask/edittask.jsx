import React from 'react';
import './edittask.css'
import {useParams} from 'react-router-dom'


const Edittask = () => {
    const { rota } = useParams()

    const idtaks = sessionStorage.getItem("task")

    console.log(idtaks)
    return (
        <div className='edittask-component '>
            <div>
                <h1>Edit Task</h1> 
            </div>
            <form action={`http://localhost:4000/edit${rota}`} className='form-edit' method='post'>
                <input name='edittittle' className='input-edit' type="text" placeholder='Title of Task' />
                <input className='some' type="number" name="idtask" id="" value={idtaks} readOnly />
                <textarea name='editcontent' className='textarea-edit' placeholder='Content of Task' />
                <fieldset className='fieldset-edit'>
                    <legend>Task Completed</legend>
                    <div>
                        <input type="radio" name="editcompletedtask" id="completedtrue" value={true} />
                        <label htmlFor="completedtrue"><span>True</span></label>
                    </div>
                    <div>
                        <input type="radio" name="editcompletedtask" id="completedfalse" value={false} />
                        <label htmlFor="completedfalse"><span>False</span></label>
                    </div>
                </fieldset>
                <div className='buttonsbox-editform'>
                    <input className='submit' type="submit" value="Update" />
                    <a className='cancel' href="">Cancel</a>
                </div>

            </form>
        </div>
    );
}

export default Edittask;