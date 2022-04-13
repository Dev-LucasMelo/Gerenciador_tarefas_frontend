import React, { useState } from 'react';
import './menu.css'

//ICONS
import { CgClose } from 'react-icons/cg'
import { BiTask, BiTaskX, BiExit, BiMenu } from 'react-icons/bi'
import { FaClipboardList, FaMoon, FaSun } from 'react-icons/fa'
import { GrUser, GrUserFemale } from 'react-icons/gr'
import { MdAddTask } from 'react-icons/md'


const MenuPlat = ({ user, taskcompleted, alltasks, notcompleted }) => {
    //states
    var [icon, seticon] = useState(1)
    var [clickdarkmode, setclickdarkmode] = useState('')


    //elementos html

    var texts = document.querySelectorAll('.text')
    var iconsmenu = document.querySelectorAll('.icon-menu')
    var tittlemenu = document.querySelector('.tittle-menu')
    var nickname = document.querySelector('.nickname')
    var usericon = document.querySelector('.usericon')
    var buttondarkmode = document.querySelector('.button-darkmode')
    var sol = document.querySelector('.sol')
    var lua = document.querySelector('.lua')
    var menucomp = document.querySelector('.menu-component')
    var dashboard = document.querySelector('.dashboard-component')
    var taskcomp = document.querySelectorAll('.task-component')
    var icons = document.querySelectorAll('.icon')



    var darkmodevalid = localStorage.getItem('Darkmode')

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
            darkmodevalid === 'false' ? sol.classList.add('some') : sol.classList.remove('some')
            darkmodevalid === 'true' ? lua.classList.add('some') : lua.classList.remove('some')
            sol.classList.add('center')
            lua.classList.add('center')
        }
    }
    //darkmode 
    function darkmode() {

        clickdarkmode % 2 === 0 ? localStorage.setItem('Darkmode', true) : localStorage.setItem('Darkmode', false)

        darkmodevalid === 'true' ? buttondarkmode.classList.add('dark') : buttondarkmode.classList.remove('dark')
        darkmodevalid === 'false' ? buttondarkmode.classList.add('light') : buttondarkmode.classList.remove('light')
        //darkmode

        darkmodevalid === "true" ? dashboard.classList.add("backgrounddark") : dashboard.classList.remove("backgrounddark")

        darkmodevalid === "true" ? taskcomp.forEach((i) => {
            i.classList.add("taskdark")
        }) : taskcomp.forEach((i) => {
            i.classList.remove("taskdark")
        })

        darkmodevalid === "true" ? icons.forEach((i) => {
            i.classList.add("taskdark")
        }) : icons.forEach((i) => {
            i.classList.remove("taskdark")
        })


        // 
        setclickdarkmode(++clickdarkmode)
    }



    //exit 

    function Exit() {
        sessionStorage.removeItem("key")
    }

    return (
        <header className={darkmodevalid !== "true" ? "menu-component menudarkmode" : "menu-component"} >

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
                    <p onClick={alltasks} className={darkmodevalid !== "true" ? "p-meio-menu p-meio-menu-dark" : "p-meio-menu"}><FaClipboardList className='icon-menu' /> <span className='text'>All tasks</span> </p>
                    <p onClick={notcompleted} className={darkmodevalid !== "true" ? "p-meio-menu p-meio-menu-dark" : "p-meio-menu"}><BiTaskX className='icon-menu' /> <span className='text'>Tasks not completed</span> </p>
                    <p onClick={taskcompleted} className={darkmodevalid !== "true" ? "p-meio-menu p-meio-menu-dark" : "p-meio-menu"}><BiTask className='icon-menu' /><span className='text'>Tasks completed</span> </p>
                    <a className='link-createtask' href={`/plat/create/${user.username.replace(/\s/g, '').toLowerCase()}`}><p className={darkmodevalid !== "true" ? "p-meio-menu p-meio-menu-dark" : "p-meio-menu"}><MdAddTask className='icon-menu' /><span className='text'>Add Task</span> </p></a>
                    <a className='link-createtask' href="/"><p onClick={Exit} className={darkmodevalid !== "true" ? "p-meio-menu p-meio-menu-dark" : "p-meio-menu"}><BiExit className='icon-menu' /><span className='text'>Exit</span> </p></a>
                </div>
            </div>
            <div className='fim-menu' >

                <div className='button-box'>
                    <FaSun className='sol' /> <button onClick={darkmode} className={`${darkmodevalid !== 'true' ? "button-darkmode dark" : "button-darkmode light"}`}><div className='content-darkmode '>'</div></button> <FaMoon className='lua' />
                </div>
            </div>

        </header>
    );
}

export default MenuPlat;