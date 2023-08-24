
import './form.css';
import '../globals.css';

import axios from 'axios';

import {useRef, useEffect} from 'react';

export default function Form(props) {

  useEffect(() => {
    if (props.onEdit) {
      const user = ref.current;

      user.nome.value = props.onEdit.nome;
      user.telefone.value = props.onEdit.telefone;
      user.email.value = props.onEdit.email;
      user.gastos.value = props.onEdit.gastos
    }
  }, [props.onEdit])

  const ref = useRef();

  const handleSubmit = async(item) => {
    item.preventDefault();
    const user = ref.current;

    if (
      !user.nome.value ||
      !user.telefone.value ||
      !user.gastos.value 
    ) {
      return console.log('Preencha todos os campos')
    }

    if (props.onEdit) {
       await axios
       .put("http://191.217.195.236:3030/" + props.onEdit.id,{
          nome: user.nome.value,
          telefone: user.telefone.value,
          email: user.email.value,
          gastos: user.gastos.value,
        })
        .then(() => console.log('Usuario editado com sucesso!'), props.getClients())
        .catch(() => console.log('Erro'));


    } else{
        await axios
        .post("http://191.217.195.236:3030", {
          nome: user.nome.value,
          telefone: user.telefone.value,
          email: user.email.value,
          gastos: user.gastos.value,
    }) 
  }
  props.setOnEdit(null)
  props.getClients()
  item.target.reset();
}
  


  

  return (
    <div className='cadastrarcliente'>
      <h1>Cadastrar Cliente</h1>
      <form className="form" ref={ref} onSubmit={handleSubmit}>
          <input type="text" name="nome" id="nome" placeholder='Nome' />
          <input type="tel" name="telefone" id="telefone" placeholder='Telefone' />
          <input type="email" name="email" id="email" placeholder='E-mail' />
          <input type="number" name="gastos" id="gastos" placeholder='Valor gasto' />
          <button type="submit" className='botaoenviar'>Salvar</button>
      </form>
    </div>
  )}
