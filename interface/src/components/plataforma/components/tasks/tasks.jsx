import React, { useState } from 'react';
import './tasks.css'

import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'


const Tasks = ({ data, rota }) => {
    const [validation, setvalidation] = useState('')

    //edittask

    const edittask = (e) => {
        let id = e.target.id

        let result = data.filter(task => task.id === Number(id))[0]

        setvalidation(result)

        result === undefined ? alert('ops, ocorreu um erro, clique novamente ') : sessionStorage.setItem("task", JSON.stringify(result))
    }

    //delete task 
    const [idtask, setidtask] = useState('')
    
    const Deletetask = (e) => {  
        let id = e.target.id 
        
        let result = data.filter(task => task.id === Number(id))[0]

        if (id === '') {
            alert('clique novamente')
        }  else {
            setidtask(id)   
            sessionStorage.setItem("deletetask",JSON.stringify(result))
        } 
         
    }   
  
    
    return (
        data.map((api, key) => (

            <div key={key} id={api.id} className={`task-component ${api.completed === true ? "completed" : 'uncompleted'}`} >
                <div className="title-task">
                    {api.tittletask}
                    <div className='box-icons'>

                        <a className='link-icon' href={validation === undefined ? '' : `/plat/edit/${rota}`} ><FaRegEdit id={api.id} className='icon' onClick={edittask} /></a>
                        <a href={idtask === '' ? ' ' : `/plat/delete/${idtask}`}><FaTrashAlt  id={api.id} className='icon' onClick={Deletetask}/></a> 
                    </div>
                </div>
                <div className="content-task">
                    {api.contenttask}
                </div>
            </div>
        ))
    );
}

export default Tasks;