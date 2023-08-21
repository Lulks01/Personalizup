'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from './grid';
import Form from './form';
import { getClientBuildManifest } from 'next/dist/client/route-loader';


export default function Dashboard() {

  const [clients, setClients] = useState([]);
  const [onEdit, setOnEdit] = useState(null)
  
  const getClients = async () => {
    try{
      const res = await axios.get("http://localhost:3030/");
      setClients(res.data);
    } catch (err) {
      console.log('Essa porra é um erro =>', err);
    }
  }
  useEffect(() => {
    getClients();
    
  }, [setClients])
  //

  

  return(
    <>
      <Form
      onEdit={onEdit}
      setClients={setClients}
      getClients={getClients}
      setOnEdit={setOnEdit}
      />

      <Grid
      clients={clients}
      getClients={getClients}
      setClients={setClients}
      setOnEdit={setOnEdit}
      />
    </>
  )
}