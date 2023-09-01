'use client'
import './rifacadastro.css';

import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

export default function RifaCadastro(props) {

  
  const [clientsList, setClientsList] = useState([]);
  
  const getClientsList = async () => {
    try{
      const res = await axios.get("http://191.217.195.236:3030");
      setClientsList(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getClientsList();
  
  }, [setClientsList])
  
  const ref = useRef();
  
  const handleSubmit = async(item) => {
    item.preventDefault();
    const form = ref.current;

    await axios
    .post("http://191.217.195.236:3030/rifas", {
      id_cliente: form.cliente.value,
      rifa_numero: form.rifa.value,
    }).then((res) => console.log(res));
    
    props.getClients();

  }
  
  
  return(
    <>
      <form className="form" ref={ref} onSubmit={handleSubmit}>
          <select name="cliente" id="nome" required={true}>
            <option value="" defaultValue={'default'}>Selecione o cliente</option>
            {
              clientsList.map((cliente) => (
                <option key={cliente.id} value={cliente.id} id='cliente'>{cliente.nome}</option>
              ))  
            }
          </select>
          <input type="number" name="rifa" id="rifa" placeholder='N° da Rifa' />
          <button type="submit" className='botaoenviar'>Salvar</button>
      </form>
    </>
  )
}