import {useState,useEffect} from 'react';

import Router from "./routes/Routes";

import Api from "./data/api";


function App() {
   //armazenamento de dados para manipulação
   const [datacadastro, setdatacadastro] = useState([])


   useEffect(()=> {
       Api.get('/datacadastro').then((json) => {
           setdatacadastro(json.data)
       })
   },[])



  return (
    <div className="App">
      <Router database={datacadastro} />
    </div>
  );
}

export default App;
