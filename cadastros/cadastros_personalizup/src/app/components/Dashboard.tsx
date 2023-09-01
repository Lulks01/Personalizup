'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './table';
import Form from './form';
import { getClientBuildManifest } from 'next/dist/client/route-loader';

import './dashboard.css'

export default function Dashboard() {

  const [clients, setClients] = useState([]);
  const [onEdit, setOnEdit] = useState(null)
  
  const getClients = async () => {
    try{
      const res = await axios.get("http://191.217.195.236:3030/");
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
    <div className='dashboard'>
      <div className='topside'>
        Clientes
      </div>
      <div className='clients'>
        <Form
        onEdit={onEdit}
        setClients={setClients}
        getClients={getClients}
        setOnEdit={setOnEdit}
        />
        <Table
        clients={clients}
        getClients={getClients}
        setClients={setClients}
        setOnEdit={setOnEdit}
        />
      </div>
    </div>
  )
}