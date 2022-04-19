/* eslint-disable no-mixed-operators */
import React from 'react';

import { useState } from 'react';
import { AiOutlineForm } from 'react-icons/ai'
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi'

import './cadastro.css'

const Cadastro = ({ api }) => {


    //ARMAZENA DADOS SENHA E CONFIRMAÇÂO
    const [password, setpassowrd] = useState('')
    const [confirm, setconfirm] = useState('')
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')


    //pega dados 
    const passworddata = (e) => {
        setpassowrd(e.target.value)
    }
    //pega dados da confirmação de senha 
    const confirmdata = (e) => {
        setconfirm(e.target.value)
    }
    const userdata = (e) => {
        setusername(e.target.value)
    }
    const emaildata = (e) => {
        setemail(e.target.value)
    }


    //VALIDAÇÃO 
    //Verificação de usuario no banco de dados

    const searchUserRegistered = api.find(element => element.username === username)

    var userunregistered = ''

    searchUserRegistered === undefined ? userunregistered = true : userunregistered = false

    //USER 
    var validuser = ''

    username.length >= 8 && userunregistered === true ? validuser = true : validuser = false

    //PASSWORD

    var validpassword = ''
 
    password.length >= 8 && password.indexOf("@") > -1 ||  
    password.length >= 8 && password.indexOf("_") > -1 ? validpassword = true : validpassword = false

    //CONFIRMPASSOWRD

    var validconfirm = ''
    
    validpassword === true ? confirm === password ? validconfirm = true :validconfirm = false : validconfirm = ''

    //valid email

    var validemail = ''

    email.indexOf('@gmail') > -1 || email.indexOf('@hotmail') > -1 ||
    email.indexOf('@outlook') > -1 || email.indexOf('@yahoo') > -1 ? validemail = true : validemail = false

    //valid submit 

    var validsubmit = ''

     validuser === true && validpassword === true &&
     validconfirm === true && validemail === true ? validsubmit = true : validsubmit = false

    return (
        <div className='cadastro-component'>
            <header className='header-cadastro'>
                <AiOutlineForm className='cadastro-icon' />
                <h1 className='tittle-cadastro'>Create your account</h1>
            </header>
            <form className='form-cadastro' action="https://lucasgerenciadorapi.herokuapp.com/cadastro" method='post' >

                <p className='tittle-input cadastro-indent' >Username</p>
                <input type="text"

                    id='input-user'
                    className={`input-cadastro ${validuser === true ? 'open' : 'closed'}`}
                    placeholder='Your Username'
                    name='username'
                    onChange={userdata}
                    required />

                <span id='user' className={`validacao ${validuser === true ? 'some' : ''}`}>{userunregistered === true ? " *Must be at least 8 digits" : "*Username already registered"}</span>

                <p className='tittle-input cadastro-indent' >Password</p>
                <input

                    type="Password"
                    className={`input-cadastro ${validpassword === true ? 'open' : 'closed'}`}
                    placeholder='Your Password'
                    name='password'
                    onChange={passworddata}
                    required
                />

                <span className={`validacao ${validpassword === true ? 'some' : ''}`}>*Use "@" or "_"</span>

                <p className='tittle-input cadastro-indent' >Repeat the Password</p>
                <input

                    type="Password"
                    className={`input-cadastro ${validconfirm === true ? 'open' : 'closed'}`}
                    placeholder='Your Password'
                    name='confirmpass'
                    onChange={confirmdata}
                    required />

                <span className={`validacao ${validconfirm === true ? 'some' : ''}`}>*Passowrds must be the same</span>

                <p className='tittle-input cadastro-indent' >E-mail</p>
                <input

                    type="email"
                    className={`input-cadastro ${validemail === true ? 'open' : 'closed'}`}
                    placeholder='Enter a valid E-mail'
                    name='email'
                    onChange={emaildata}
                    required />

                <span className={`validacao ${validemail === true ? 'some' : ''}`}>*Use a valid e-mail</span>

                <fieldset className='sex-form'>
                    <legend className='legend-sex-form' >Sex</legend>
                    <div>
                        <input type="radio" id='male' className='input-sex' name="sex" value='M' checked />
                        <label htmlFor="male"><BiMaleSign /></label>
                    </div>
                    <div>
                        <input type="radio" id='fem' className='input-sex' name="sex" value='F' />
                        <label htmlFor="fem"><BiFemaleSign id='female' /></label>
                    </div>
                </fieldset>

                <input id='submit' className='finish-form' type="submit" value='Finish' disabled={validsubmit === true ? false : true} />
            </form>
        </div>
    );
}

export default Cadastro;