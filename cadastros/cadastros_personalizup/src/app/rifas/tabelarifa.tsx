'use client';
import './tabelarifa.css'

import { EditIcon, DeleteIcon } from '../../../public';
import axios from 'axios';


export default function TabelaRifa(props) {
  
  const clients = props.clients;

  const handleDelete = async (rifa_numero) => {
    await axios
    .delete("http://191.217.195.236:3030/rifas/" + rifa_numero)

    const newArray =  clients.filter((client) => client.rifa_numero !== rifa_numero);
    props.setClients(newArray);

    props.setOnEdit(null)
  };

  return( 
    <table className="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Telefone</th>
        <th>N° Rifa</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        { 
        clients.map((item, i) => (
          <tr key={i}>
            <td>{item.nome}</td>
            <td>{item.telefone}</td>
            <td>{item.rifa_numero}</td>
            <td>
              <span onClick={() => handleEdit(item)}>
                    <EditIcon className='icon'/>
              </span>
              </td>
              <td>
              <span onClick={() => handleDelete(item.rifa_numero)}>
                    <DeleteIcon className='icon'/>
              </span>
            </td>
          </tr>
        ))
        }
    </tbody>
  </table>
  )
}