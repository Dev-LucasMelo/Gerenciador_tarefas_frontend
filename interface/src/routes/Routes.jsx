
import React from 'react';
import { useState } from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

//COMPONENTS

import Cadastro from '../components/cadastro/cadastro';
import Finish from '../components/finish/finish';
import Login from '../components/login/login';
import CreateTask from '../components/plataforma/components/createtask/createtask';
import Deletetask from '../components/plataforma/components/deletetask/deletetask';
import Edittask from '../components/plataforma/components/edittask/edittask';
import RedirectComp from '../components/plataforma/components/redirect/redirect';


const Router = ({ database }) => {
    const [user, setuser] = useState([])

    //pegar dados de login 

    function setdadoslogin(user, password) {

        const result = database.find(element => element.username === user && element.password === password)

        setuser(result)
    }

    function onsubmit() {
        //chave que vai ser manipulada <3 
        if (user === undefined) {
            alert('password or username not found')
        } else {
            window.location = `plat/${user.id}`
            sessionStorage.setItem("key", JSON.stringify(user));
        }
    }

    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Login user={setdadoslogin} submit={onsubmit} />} />
                <Route path='/cadastro' element={<Cadastro api={database} />} />
                <Route path='/Finish' element={<Finish />} />

                <Route path='/plat'>
                    <Route path=':id' element={<RedirectComp />} />
                    
                    <Route path='edit'> 
                        <Route path=':rota' element={<Edittask />} />
                    </Route>

                    <Route path='create'> 
                        <Route path=':user' element={<CreateTask />} />
                    </Route>

                    <Route path='delete'> 
                        <Route path=':idtask' element={<Deletetask />} />
                    </Route>
                </Route>
            </Routes>

        </BrowserRouter>

    )
}
export default Router;