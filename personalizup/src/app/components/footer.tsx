'use client'
import { Arrow } from '../../../public/Icons';
import './footer.css';
import React, { useState, useEffect } from 'react';
import footerdata from './infos.json';

export default function Footer() {
  const [select, setselected] = useState(null);
  
  function changeinfostate(i: any){
    if (select === i){
      return setselected(null);
    }
    setselected(i);
  }

  return(
    <div className="footer">
      <h1>Cadastre-se e receba o catálogo de produtos atualizados</h1>
      <p>Cadastre com seu e-mail e fique por dentro das novidades!</p>
      <label htmlFor="newsletter">Digite o seu e-mail</label>
      <input type="text" id='newsletter'/>


      <ul className='footerinfos'>
        {
          footerdata.map( (item, i) => (
              <div className='infobx' onClick={() => changeinfostate(i)}>
                <li className='infotitle'>
                  {item.title}
                  <Arrow className={select===i?'arrowopen':'arrowclosed'}/>
                </li>
                <div className='infocontent' id={select===i?'open':'closed'} key={i}>
                  {item.content}
                </div>
              </div>
          ))}
        <div key={2} className='infobx' onClick={() => changeinfostate(2)}>
          <li className='infotitle'>
            Atendimento
            <Arrow className={'arrowclosed'} />
          </li>
          <div className='infocontent' id={select===2?'open':'closed'}>
            <div className='atendimentobx'>
              
            </div>
          </div>
        </div>
      </ul>



      <p id='personalizupinfos'>
      Personalizup Produtos Personalizados LTDA - CNPJ: 33.432.432/0001-43© <br/>
      © Todos os direitos reservados - 2023<br/>
      <span style={{fontWeight:'bold'}}>Desenvolvimento: Personalizup</span>
      </p>

    </div>
  )
}