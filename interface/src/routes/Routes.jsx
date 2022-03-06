import React from 'react';
import { useState } from 'react';

import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Login from '../components/login/login';


const Router = ({database}) => {
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login api={database} />} />
                <Route path='/cadastro' element={'cadastro'} />
                <Route path='/Finish' element={'finish'} />
                <Route path='/plat' element={'plataforma'} />
                <Route path='/erro' element={'erro ao fazer login'} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;