import React, { useState } from 'react';
import './tasks.css'

import { FaRegEdit } from 'react-icons/fa'
import Edittask from '../edittask/edittask';


const Tasks = ({ data }) => {
    const [taskselect, settaskselect] = useState('')

    function edittask(e) {
        var id = e.target.id

        var result = data.filter(task => task.id === Number(id))

        settaskselect(result[0])
    }

    console.log(taskselect)

    return (
        <>
            {
                data.map((api, key) => (

                    <div key={key} id={api.id} className={`task-component ${api.completed === true ? "completed" : 'uncompleted'}`} >
                        <div className="title-task">
                            {api.tittletask}
                            <FaRegEdit id={api.id} className='icon-edit' onClick={edittask} />
                        </div>
                        <div className="content-task">
                            {api.contenttask}
                        </div>
                    </div>
                ))
            }
            <Edittask task={taskselect} />
        </>

    );
}

export default Tasks;