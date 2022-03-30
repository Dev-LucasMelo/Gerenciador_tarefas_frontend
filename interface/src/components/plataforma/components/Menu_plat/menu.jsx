import React, { useState } from 'react';
import './menu.css'

//ICONS
import { CgClose } from 'react-icons/cg'
import { BiTask, BiTaskX, BiExit, BiMenu } from 'react-icons/bi'
import { FaClipboardList, FaMoon, FaSun } from 'react-icons/fa'
import { GrUser, GrUserFemale } from 'react-icons/gr'
import { MdAddTask } from 'react-icons/md'


const MenuPlat = ({ user }) => {
    //states
    var [icon, seticon] = useState(1)
    var [darkbuttonclick, setdarkbuttonclick] = useState(1)
    var [darkmodeoff, setdarkmodeon] = useState('')

    //elementos html

    var texts = document.querySelectorAll('.text')
    var iconsmenu = document.querySelectorAll('.icon-menu')
    var tittlemenu = document.querySelector('.tittle-menu')
    var nickname = document.querySelector('.nickname')
    var usericon = document.querySelector('.usericon')
    var buttondarkmode = document.querySelector('.button-darkmode')
    var sol = document.querySelector('.sol')
    var lua = document.querySelector('.lua')

    // html function no darkmode 
    var menucomp = document.querySelector('.menu-component')
    var items = document.querySelectorAll('.p-meio-menu')



    //functions 

    function click() {
        seticon(++icon)

        icon === 1 || icon % 2 === 1 ? texts.forEach((i) => {
            i.classList.remove('some')
        }) : texts.forEach((i) => {
            i.classList.add('some')
        })

        icon === 1 || icon % 2 === 1 ? iconsmenu.forEach((i) => {
            i.classList.remove('center')
        }) : iconsmenu.forEach((i) => {
            i.classList.add('center')
        })

        icon === 1 || icon % 2 === 1 ? menucomp.classList.remove('menucompclosed') : menucomp.classList.add('menucompclosed')
        icon === 1 || icon % 2 === 1 ? tittlemenu.classList.remove('some') : tittlemenu.classList.add('some')
        icon === 1 || icon % 2 === 1 ? nickname.classList.remove('some') : nickname.classList.add('some')
        icon === 1 || icon % 2 === 1 ? usericon.classList.remove('center') : usericon.classList.add('center')
        icon === 1 || icon % 2 === 1 ? buttondarkmode.classList.remove('some') : buttondarkmode.classList.add('some')


        if (icon === 1 || icon % 2 === 1) {

            sol.classList.remove('some')
            lua.classList.remove('some')
            sol.classList.remove('center')
            lua.classList.remove('center')
        } else {
            darkmodeoff === true ? sol.classList.add('some') : sol.classList.remove('some')
            darkmodeoff === true ? lua.classList.add('center') : sol.classList.add('center')
            darkmodeoff === true ? lua.classList.remove('some') : lua.classList.add('some')
        }
    }


    function darkmode() {
        setdarkbuttonclick(++darkbuttonclick)

        darkbuttonclick % 2 === 0 ? buttondarkmode.classList.add('dark') : buttondarkmode.classList.remove('dark')
        darkbuttonclick % 2 === 0 ? setdarkmodeon(true) : setdarkmodeon(false)

        darkmodeoff !== true ? menucomp.classList.add('menudarkmode') : menucomp.classList.remove('menudarkmode')

        // eslint-disable-next-line no-unused-expressions
        darkmodeoff !== true ? items.forEach((i) => {
            i.classList.add('p-meio-menu-dark')
        }) : items.forEach((i) => {
            i.classList.remove('p-meio-menu-dark')
        })
    }

    return (
        <header className='menu-component ' >

            <div className='topo-menu ' >
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
                    <a className='link-createtask' href={`/plat/create/${user.username.replace(/\s/g, '').toLowerCase()}`}><p className='p-meio-menu'><MdAddTask className='icon-menu' /><span className='text'>Add Task</span> </p></a> 
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