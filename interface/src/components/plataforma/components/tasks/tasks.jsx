import React,{useState} from 'react';
import './tasks.css'

import { FaRegEdit } from 'react-icons/fa'


const Tasks = ({ data,rota }) => {
    const [validation,setvalidation] = useState('')

     

    function edittask(e) {
        var id = e.target.id

        const result = data.filter(task => task.id === Number(id))[0]

        setvalidation(result)
        if (result === undefined) {
            alert('ops, ocorreu um erro, clique novamente ')
        } else {
            
            sessionStorage.setItem("task", JSON.stringify(result.id) ) 
        }

        
    }
//
    return (

        data.map((api, key) => (

            <div key={key} id={api.id} className={`task-component ${api.completed === true ? "completed" : 'uncompleted'}`} >
                <div className="title-task">
                    {api.tittletask}
                    <a href={ validation === undefined ? '':`/plat/edit/${rota}`} ><FaRegEdit id={api.id} className='icon-edit' onClick={edittask} /></a>
                    
                </div>
                <div className="content-task">
                    {api.contenttask}
                </div>
            </div>
        ))


    );
}

export default Tasks;