import React,{useState,useEffect} from 'react';
import Api from '../../../../data/api';
import Headerplat from '../header/headerplat';
import Tasks from '../tasks/tasks';

import './dashboard.css'



const Dashboard = ({user}) => {
    const [apitasks,setapitasks] = useState([])
        
    useEffect(()=> {
        Api.get(`/tasks${user.username.replace(/\s/g, '').toLowerCase()}`).then((json) => {
            setapitasks(json.data)
        })
    },[])


    return (
        <section className='dashboard-component'>
            <Headerplat />
            <Tasks data={apitasks} />



        </section>
    );
}

export default Dashboard;