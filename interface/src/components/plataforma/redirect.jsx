//import { useParams } from 'react-router-dom'
import React from 'react'
import { useParams } from 'react-router-dom'
import Plat from './plat'



const RedirectComp = ({ api }) => {
  const key = sessionStorage.getItem("key")
  const apikey = JSON.parse(key)

  let { id } = useParams()

  if (apikey.id === Number(id)) {
    return (
      <>
        bem vindo {apikey.username}
      </>
    )
  } else {
    return (
      <>
        ERROR AO REALIZAR LOGIN
      </>
    )
  }

}

export default RedirectComp;