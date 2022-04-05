import React,{useState} from 'react';

import './plat.css'
//components
import MenuPlat from './components/Menu_plat/menu';
import Dashboard from './components/dashboard/dashboard';


const Plat = ({user}) => {
    //funções de clique menu 
    var [opt,setopt] =  useState('all')
    
    const AllTasks = () => {    
        setopt('all')
    }
    const TasksCompleted = () => {    
        setopt('completed')
    }
    const TasksNotcompleted = () => {    
        setopt('notcompleted')
    }

    
    
    return (
        <div className='plataforma-geral'> 
            <MenuPlat user={user} notcompleted={TasksNotcompleted} alltasks={AllTasks} taskcompleted={TasksCompleted} />
            <Dashboard opt={opt} user={user} />
        </div>
    );
}

export default Plat;