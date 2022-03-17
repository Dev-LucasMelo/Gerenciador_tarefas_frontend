import React, { useState } from 'react';


import './tasks.css'

const Tasks = ({ data }) => {
    
    

    return (
        <>
            {data.map((api, key) => (
                <>
                    <div key={key} id={api.id} className={`task-component ${api.completed === true ? "completed" : 'uncompleted'}`} >
                        <div className="title-task">
                            {api.tittletask}
                        </div>
                        <div className="content-task">
                            {api.contenttask}
                        </div>
                    </div>
                </>
            ))}



        </>
    );
}

export default Tasks;