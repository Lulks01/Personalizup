import './form.css';
import '../globals.css';

import axios from 'axios';

import {useRef, useEffect} from 'react';

export default function Form(props) {


  const ref = useRef();

  const handleSubmit = async(item) =>{
    item.preventDefault();
    const user = ref.current;
    await axios
    .post("http://localhost:3030", {
      nome: user.nome.value,
      telefone: user.telefone.value,
      email: user.email.value,
      gastos: user.gasto.value,
    })

    props.getClients()
  }

  useEffect(() => {
    if(props.onEdit){
      handleEdit(props.onEdit)
    }

  })

  const handleEdit = async(item) =>{
    useRef(item)
  }
  

  return (
    <div className='cadastrarcliente'>
      <h1>Cadastrar Cliente</h1>
      <form className="form" ref={ref} onSubmit={handleSubmit}>
          <input type="text" name="nome" id="nome" placeholder='Nome' />
          <input type="tel" name="telefone" id="telefone" placeholder='Telefone' />
          <input type="email" name="email" id="email" placeholder='E-mail' />
          <input type="number" name="gasto" id="gasto" placeholder='Valor gasto' />
          <button type="submit" className='botaoenviar'>Salvar</button>
      </form>
    </div>
  )}
