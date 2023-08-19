'use client';

import { useEffect, useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import axios from 'axios';
import './grid.css'
export default function Grid() {

  const [clients, setClients] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  

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

  
  console.log(clients);

  return( 
    <div className="grid">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th id="onlyweb">Email</th>
            <th>Valor Gasto</th>
          </tr>
        </thead>
        <tbody>
            { 
            clients.map((item, i) => (
              <tr key={i}>
                <td>{item.idclientes}</td>
                <td>{item.nome}</td>
                <td>{item.telefone}</td>
                <td id='onlyweb'>{item.email}</td>
                <td >{item.gastos}</td>
              </tr>
            ))
            }
        </tbody>

      </table>

    </div>
  )
}