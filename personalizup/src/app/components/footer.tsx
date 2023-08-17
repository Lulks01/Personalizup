'use client'
import { Arrow, FacebookIcon, InstagramIcon, WhatsappIcon } from '../../../public/Icons';
import './footer.css';
import React, { useState, useEffect } from 'react';


export default function Footer() {
  const [select, setselected] = useState(null);

  function changeinfostate(i: any) {
    if (select === i) {
      return setselected(null);
    }
    setselected(i);
  }

  return (
    <div className="footer">
      <h1>Cadastre-se e receba o catálogo de produtos atualizados</h1>
      <p>Cadastre com seu e-mail e fique por dentro das novidades!</p>
      <div className='newsletterbx'>
        <input type="text" id='newsletter' placeholder='Digite seu email' />
        <button type="submit">
          <i> <Arrow className='submiticon'/> </i>
        </button>
      </div>


      <ul className='footerinfos'>

        <div className='infobx' onClick={() => changeinfostate(1)}>
          <li className='infotitle'>
            Sobre nós
            <Arrow className={select === 1 ? 'arrowopen' : 'arrowclosed'} />
          </li>
          <div className='infocontent' id={select === 1 ? 'open' : 'closed'} key={1}>
            Somos uma empresa apaixonada por transformar ideias em realidade. Especializados em produtos personalizados, oferecemos uma ampla gama de itens que podem ser customizados de acordo com as preferências de cada cliente. De presentes únicos a lembranças especiais para eventos, nossa missão é criar peças que reflitam a individualidade e estilo de cada pessoa.
          </div>
        </div>

        <div key={2} className='infobx' onClick={() => changeinfostate(2)}>
          <li className='infotitle'>
            Atendimento
            <Arrow className={select === 2 ? 'arrowopen' : 'arrowclosed'} />
          </li>
          <div className='infocontent' id={select === 2 ? 'open' : 'closed'}>
            <a className='whatsappbx' href="https://wa.me/+556596200705">
                <WhatsappIcon className='Icon'/>
                Atendimento pelo Whatsapp 65 9620-0705
            </a>
          </div>
        </div>

        <div key={3} className='infobx' onClick={() => changeinfostate(3)}>
          <li className='infotitle'>
            Redes sociais
            <Arrow className={select === 3 ? 'arrowopen' : 'arrowclosed'} />
          </li>
          <div className='infocontent' id={select === 3 ? 'open' : 'closed'}>
            <div className='socialmediasbx'>
              <a href="https://www.facebook.com/Personalizup/" target='_blank'>
                <FacebookIcon className='socialicon'/>
              </a>
              <a href="https://www.instagram.com/personalizup" target='_blank'>
                <InstagramIcon className='socialicon'/>
              </a>
            </div>
          </div>
        </div>

      </ul>



    <p id='personalizupinfos'>
      Personalizup Produtos Personalizados LTDA - CNPJ: 33.432.432/0001-43© <br />
      © Todos os direitos reservados - 2023<br />
      <span style={{ fontWeight: 'bold' }}>Desenvolvimento: Personalizup</span>
    </p>

    </div >
  )
}