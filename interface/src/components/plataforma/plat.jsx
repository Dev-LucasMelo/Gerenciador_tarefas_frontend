//import { useParams } from 'react-router-dom'
import React from 'react'
import { useParams } from 'react-router-dom'

const RedirectComp = ({ api }) => {
  const key = sessionStorage.getItem("key")

  let { id } = useParams()
  const searchuser = api.find(element => element.id === Number(id))

  if (key === null) {
    return (
      <> 
        ERROR
      </>
    );
  } else {
    return (
      <> 
        <h1>Bem vindo</h1>
      </>
    );

  }

 
  

}

export default RedirectComp;