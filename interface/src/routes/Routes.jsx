import React from 'react';

import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

//COMPONENTS
import Cadastro from '../components/cadastro/cadastro';
import Finish from '../components/finish/finish';
import Login from '../components/login/login';



const Router = ({ database }) => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login api={database} />}/>
                <Route path='/cadastro' element={<Cadastro api={database} />} />
                <Route path='/Finish' element={<Finish />} />
                <Route path='/plat' element={'plataforma'} />
                <Route path='/erro' element={'erro ao fazer login'} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;