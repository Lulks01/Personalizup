import './form.css';
import '../globals.css';


export default function Form() {
  return (
    <div>
      <h1>Cadastrar Cliente</h1>
      <div className="form">
        <div className="inputbx">
          <input type="text" name="nome" id="nome" placeholder='Nome' />
        </div>
        <div className="inputbx">
          <input type="text" name="telefone" id="telefone" placeholder='Telefone' />
        </div>
        <div className="inputbx">
          <input type="text" name="email" id="email" placeholder='E-mail' />
        </div>
        <div className="inputbx">
          <input type="text" name="gasto" id="gasto" placeholder='Valor gasto' />
        </div>
        <div className='buttons'>
          <button type="submit" className='botaoenviar'>Salvar</button>
        </div>
      </div>
    </div>
  );
}
