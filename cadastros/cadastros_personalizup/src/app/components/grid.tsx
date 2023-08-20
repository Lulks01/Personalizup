'use client';

import axios from 'axios';
import './grid.css'
import { DeleteIcon, EditIcon } from '../../../public';

import { useEffect } from 'react';

export default function Grid(props) {
  //PUXAR DADOS DO DB
  const clients = props.clients

  const handleEdit = (item) =>{
    props.setOnEdit(item)
  }

  const handleDelete = async (id) => {
    await axios
    .delete("http://localhost:3030/" + id)

    const newArray =  clients.filter((client) => client.id !== id);
    props.setClients(newArray);

    props.setOnEdit(null)
  };

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
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            { 
            clients.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.telefone}</td>
                <td id='onlyweb'>{item.email}</td>
                <td >{item.gastos}</td>
                <td>
                  <span onClick={() => handleEdit(item)}>
                    <EditIcon className='icon'/>
                  </span>
                </td>
                <td>
                  <span onClick={() => handleDelete(item.id)}>
                    <DeleteIcon className='icon'/>
                  </span>
                </td>
              </tr>
            ))
            }
        </tbody>

      </table>

    </div>
  )
}