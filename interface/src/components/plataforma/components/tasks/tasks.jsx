import React from 'react';
import './tasks.css'

import {FaRegEdit} from  'react-icons/fa'

const Tasks = ({ data }) => {
    
    

    return (
   
            data.map((api, key) => (
              
                    <div key={key} id={api.id} className={`task-component ${api.completed === true ? "completed" : 'uncompleted'}`} >
                        <div className="title-task">
                            {api.tittletask}
                            <FaRegEdit />
                        </div>
                        <div className="content-task">
                            {api.contenttask}
                        </div>
                    </div>
            ))

    );
}

export default Tasks;