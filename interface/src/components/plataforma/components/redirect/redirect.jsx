//import { useParams } from 'react-router-dom'
import React from 'react'
import { useParams } from 'react-router-dom'
import Plat from '../../plat'


const RedirectComp = () => {

  const key = sessionStorage.getItem("key")
  const apikey = JSON.parse(key)

  let { id } = useParams()


  function redirecttologin() {
    return (
      <div className='finish-component' >
        <h1>Error accessing the platform, you need to log in</h1>
        <div>
          <a className='submit' href="/">Login</a>
        </div>
      </div>
    )
  }


  function redirecttoplataform() {
    return (
      <>
        <Plat user={apikey} />
      </>
    )
  }

  return key === null || apikey.id !== Number(id) ? redirecttologin() : redirecttoplataform()
}

export default RedirectComp;