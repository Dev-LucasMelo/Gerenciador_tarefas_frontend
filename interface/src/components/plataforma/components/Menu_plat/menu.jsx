import React, { useState } from 'react';
import './menu.css'

//ICONS
import { CgClose } from 'react-icons/cg'
import { BiTask, BiTaskX, BiExit, BiMenu } from 'react-icons/bi'
import { FaClipboardList, FaMoon, FaSun } from 'react-icons/fa'
import { GrUser, GrUserFemale } from 'react-icons/gr'

const MenuPlat = ({ user }) => {
    var [icon, seticon] = useState(1)
    var [darkbuttonclick, setdarkbuttonclick] = useState(1)
    var [darkmodeoff,setdarkmodeon] = useState('')

    //elementos html
   
    var texts = document.querySelectorAll('.text')
    var iconsmenu = document.querySelectorAll('.icon-menu')
    var tittlemenu = document.querySelector('.tittle-menu')
    var nickname = document.querySelector('.nickname')
    var usericon = document.querySelector('.usericon')
    var buttondarkmode = document.querySelector('.button-darkmode')
    var sol = document.querySelector('.sol')
    var lua = document.querySelector('.lua')

    // html function nodarkmode 
    var menucomp = document.querySelector('.menu-component')
    var items = document.querySelectorAll('.p-meio-menu')  
  
    

    //functions 

    function click() {
        seticon(++icon)

        if (icon % 2 === 0 || icon === 0) {
            texts.forEach((i) => {
                i.classList.add('some')
            })

            iconsmenu.forEach((i) => {
                i.classList.add('center')
            })
            menucomp.classList.add('menucompclosed')
            tittlemenu.classList.add('some')
            nickname.classList.add('some')
            usericon.classList.add('center')
            buttondarkmode.classList.add('some')

            if (darkmodeoff === true) {
                sol.classList.add('some')
                lua.classList.add('center')
                lua.classList.remove('some')
            } else {
                sol.classList.remove('some')
                sol.classList.add('center')
                lua.classList.add('some')
            }
        } else {
            texts.forEach((i) => {
                i.classList.remove('some')
            })

            iconsmenu.forEach((i) => {
                i.classList.remove('center')
            })
            menucomp.classList.remove('menucompclosed')
            tittlemenu.classList.remove('some')
            nickname.classList.remove('some')
            usericon.classList.remove('center')
            buttondarkmode.classList.remove('some')
            sol.classList.remove('some')
            lua.classList.remove('some')
            sol.classList.remove('center')
            lua.classList.remove('center')
        }
    }

    
    function darkmode() {
        setdarkbuttonclick(++darkbuttonclick)
        

        if (darkbuttonclick % 2 === 0 ) {
            buttondarkmode.classList.add('dark')
            setdarkmodeon(true)
        } else {
            buttondarkmode.classList.remove('dark')
            setdarkmodeon(false)
        }


        if (darkmodeoff !== true) {
            menucomp.classList.add('menudarkmode')
            items.forEach((i)=>{
                i.classList.add('p-meio-menu-dark')
            })
           

        } else {
            menucomp.classList.remove('menudarkmode')

            items.forEach((i)=>{
                i.classList.remove('p-meio-menu-dark')
            })
           
        }
    }




    return (
        <header className='menu-component' >

            <div className='topo-menu' >
                <div className='close'>
                    <h1 onClick={click} className='close-button' >{icon % 2 === 0 ? <BiMenu /> : <CgClose />}</h1>
                </div>
                <div className='user' >
                    {user.sexo === 'M' ? <GrUser className='usericon' />
                        : <GrUserFemale className='usericon' />
                    }
                    <h2 className='nickname' ><strong>{user.username}</strong></h2>
                </div>

            </div>
            <div className='meio-menu' >
                <div className='tittle-menu' >
                    <h2 className='tittle' >Dashboard</h2>
                </div>
                <div className='meio-menu-content'>
                    <p className='p-meio-menu'><FaClipboardList className='icon-menu' /> <span className='text'>All tasks</span> </p>
                    <p className='p-meio-menu'><BiTaskX className='icon-menu' /> <span className='text'>Tasks not completed</span> </p>
                    <p className='p-meio-menu'><BiTask className='icon-menu' /><span className='text'>Tasks completed</span> </p>
                    <p className='p-meio-menu'><BiExit className='icon-menu' /><span className='text'>Exit</span> </p>
                </div>
            </div>
            <div className='fim-menu' >

                <div className='button-box'>
                    <FaSun className='sol' /> <button onClick={darkmode} className='button-darkmode'><div className='content-darkmode'>'</div></button> <FaMoon className='lua' />
                </div>
            </div>

        </header>
    );
}

export default MenuPlat;