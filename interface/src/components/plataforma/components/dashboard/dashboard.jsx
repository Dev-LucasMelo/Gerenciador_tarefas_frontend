import React,{useState,useEffect} from 'react';
import Api from '../../../../data/api';

import Tasks from '../tasks/tasks';

import './dashboard.css'

const Dashboard = ({user, opt}) => {
    var darkmodevalid = localStorage.getItem("Darkmode")
    const [apitasks,setapitasks] = useState([])
        
    useEffect(()=> {
        Api.get(`/tasksuser/${user.username.replace(/\s/g, '').toLowerCase()}`).then((json) => {
            setapitasks(json.data)
        })
    },[])
  
    return (
        <section className={darkmodevalid !== 'true' ? "dashboard-component backgrounddark" : "dashboard-component" } >
            <Tasks opt={opt} data={apitasks} rota={user.username.replace(/\s/g, '').toLowerCase()} />
        </section>
    );
}

export default Dashboard;