import React from 'react';

import './plat.css'
//components
import MenuPlat from './components/Menu_plat/menu';
import Dashboard from './components/dashboard/dashboard';


const Plat = ({user}) => {
    return (
        <div className='plataforma-geral'> 
            <MenuPlat user={user} />
            <Dashboard />
        </div>
    );
}

export default Plat;