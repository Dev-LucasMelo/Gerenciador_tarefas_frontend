import React,{useState,useEffect} from 'react';
import Api from '../../../../data/api';
import Headerplat from '../header/headerplat';
import Tasks from '../tasks/tasks';
import {useParams} from 'react-router-dom'
import './dashboard.css'



const Dashboard = () => {
    const [apitasks,setapitasks] = useState([])

    const {id } = useParams()
    
    useEffect(()=> {
        Api.get(`/tasks${id}`).then((json) => {
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