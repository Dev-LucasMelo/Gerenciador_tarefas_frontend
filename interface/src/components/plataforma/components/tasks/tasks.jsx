import React, { useState } from 'react';
import './tasks.css'

import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'

const Tasks = ({ data, rota, opt }) => {
    const [validation, setvalidation] = useState('')

    //edittask

    const edittask = (e) => {
        let id = e.target.value

        let result = data.filter(task => task.id === Number(id))[0]

        setvalidation(result)

        result === undefined ? alert('ops, ocorreu um erro, clique novamente ') : sessionStorage.setItem("task", JSON.stringify(result))
    }

    //delete task 
    const [idtask, setidtask] = useState('')

    const Deletetask = (e) => {
        let id = e.target.value

        let result = data.filter(task => task.id === Number(id))[0]

        if (id === '') {
            alert('clique novamente')
        } else {
            setidtask(id)
            sessionStorage.setItem("deletetask", JSON.stringify(result))
        }

    }

    //filtro de tasks 


    const taskscompleted = document.querySelectorAll('.completed')
    const tasksnotcompleted = document.querySelectorAll('.uncompleted')

    if (opt === "all") {
        taskscompleted.forEach((a) => {
            a.classList.remove('some')
        })
        tasksnotcompleted.forEach((a) => {
            a.classList.remove('some')
        })
    }else if (opt === 'completed') {
        taskscompleted.forEach((a) => {
            a.classList.remove('some')
        })
        tasksnotcompleted.forEach((a) => {
            a.classList.add('some')
        })

    } else if (opt === 'notcompleted') {
        taskscompleted.forEach((a) => {
            a.classList.add('some')
        })
        tasksnotcompleted.forEach((a) => {
            a.classList.remove('some')
        })
    }

    var darkmodevalid = localStorage.getItem("Darkmode")

    return (
        data.map((api, key) => (

            <div key={key} id={api.id} className={`${darkmodevalid !== 'true' ? "task-component taskdark" : "task-component" } ${api.completed === true ? "completed" : 'uncompleted'} `} >
                <div className="title-task">
                    {api.tittletask}
                    <div className='box-icons ' >
                        <a className='link-icon' href={validation === undefined ? '' : `/plat/edit/${rota}`} ><button value={api.id} onClick={edittask} ><FaRegEdit className={darkmodevalid !== 'true' ? "icon taskdark" : "icon"} /></button> </a>
                        <a href={idtask === '' ? ' ' : `/plat/delete/${idtask}`}  >  <button value={api.id} onClick={Deletetask}> <FaTrashAlt className={darkmodevalid !== 'true' ? "icon taskdark" : "icon"} /></button> </a>
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