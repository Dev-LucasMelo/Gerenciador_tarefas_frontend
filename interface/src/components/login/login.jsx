import React from 'react'
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai'

import './login.css';

function Login({ api }) {

  const [userlogin, setuserlogin] = useState('')
  const [userpassword, setuserpassword] = useState('')

  const datalogin = (a) => {
    setuserlogin(a.target.value)
  }
  const datapassword = (a) => {
    setuserpassword(a.target.value)
  }

  function loginplat() {

    const result = api.find(element => element.username === userlogin && element.password === userpassword)
   
    if (result === undefined) {

      console.log('user não existe')
    } else {

          console.log(result)
    }
  }



  return (
    <div className="login">
      <div className="login-component">
        <div className='form-box'>
          <div className='Logo-tittle'>
            <a href="https://github.com/Dev-LucasMelo" target='_blank ' ><h1 className='logo' ><AiFillGithub /></h1></a>
            <h1 className='tittle-form' >Login</h1>
          </div>
          <div>
            <form className='form'>
              <p className='tittle-input'>Username</p>
              <input

                className='input'
                name='login_user'
                placeholder='Your username'
                type="text"
                onChange={datalogin} />
              <p className='tittle-input'>Password</p>
              <input

                className='input'
                name='login_password'
                placeholder='Your password'
                type="password"
                onChange={datapassword} />

              <br></br>
              <a className='link-cadastro' href="/cadastro">Create a new account</a>
              <br></br>
              <br></br>
              <br></br>
              <button className='submit' onClick={loginplat} >Login</button>
            </form>
          </div>
        </div>
        <div className='content-login'>
          <a href="https://github.com/Dev-LucasMelo" target="_blank " ><AiFillGithub className='github' /></a>
        </div>
      </div>
    </div>
  );
}

export default Login;