import React from 'react';
import { useState } from 'react'
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

    const [Userdata, setuserdata] = useState([])
    const Aviso = 'você precisa realizar o login para acessar a plataforma'

    var userencontrado = ''

    //AQUI FAZ A VALIDAÇÂO SE O USUARIO FOI ENCONTRADO NO BANCO DE DADOS
    function validationlogin(userlogin, userpassword) {

        const result = database.find(element => element.username === userlogin && element.password === userpassword)

        if (result === undefined) {
            userencontrado = false


        } else {
            userencontrado = true
            setuserdata(result)
        }
    }

    //VERIFICA SE A SENHA TÁ CORRETA E PASSA O USUARIO PARA A PLATAFORMA
    function clicklogin() {
        if (userencontrado === true) {
            window.location.href = `/plat/${Userdata.id}`
        } else {
            alert('verifique sua senha ou username')
        }
    }

    //ADICIONAR PARAMS (REACT-ROUTER-DOM) NO COMPONENT DE PLATAFORMA
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login validationuser={validationlogin} loginplat={clicklogin} />} />
                <Route path='/cadastro' element={<Cadastro api={database} />} />
                <Route path='/Finish' element={<Finish />} />
                <Route path='/plat'>
                    <Route path='' element={'error'}  />
                    <Route path='1' element={'TESTE'}  /> 
                    <Route path='2' element={'Bem vindo Lucas'}  /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;