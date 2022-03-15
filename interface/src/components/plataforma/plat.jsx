import React from 'react';

//components
import MenuPlat from './components/Menu_plat/menu';


const Plat = ({user}) => {
    return (
        <> 
            <MenuPlat user={user} />
        </>
    );
}

export default Plat;