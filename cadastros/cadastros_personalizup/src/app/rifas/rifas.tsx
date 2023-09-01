'use client'

import TabelaRifa from "./tabelarifa";
import RifaCadastro from "./rifacadastro";

import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Main() {

  const [clients, setClients] = useState([]);
  
  const getClients = async () => {
    try{
      const res = await axios.get("http://191.217.195.236:3030/rifas");
      setClients(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getClients();
  
  }, [setClients])

  return(
    <>
      <RifaCadastro
      setClients={setClients}
      getClients={getClients}
      clients={clients}/>
      
      <TabelaRifa
        setClients={setClients}
        getClients={getClients}
        clients={clients}/>

    </>
  )
}