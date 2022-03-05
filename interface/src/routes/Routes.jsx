import React from 'react';
import { useState } from 'react';

import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

const Router = ({database}) => {
    console.log(database)
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={'Login'} />
                <Route path='/cadastro' element={'cadastro'} />
                <Route path='/Finish' element={'finish'} />
                <Route path='/plat' element={'plataforma'} />
                <Route path='/erro' element={'erro ao fazer login'} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;