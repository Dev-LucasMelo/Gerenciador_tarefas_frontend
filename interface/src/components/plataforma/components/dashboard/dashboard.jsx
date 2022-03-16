import React from 'react';
import Headerplat from '../header/headerplat';
import Tasks from '../tasks/tasks';
import './dashboard.css'



const Dashboard = () => {
    return (
        <section className='dashboard-component'>
            <Headerplat />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
        </section>
    );
}

export default Dashboard;