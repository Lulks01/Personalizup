'use client'

import { PersonalizupLogo, AddClients, ListaNumerada } from "../../../public";

import './barralateral.css';

export default function BarraLateral() {
  return(
    <div className="BarraLateral">
      <PersonalizupLogo className='personalizupLogo'/>
      <div className="botões">
        <div className="button"
        onClick={() => location.href = '/'}>
          <AddClients className='menuIcon'/>
          <p>Clientes</p>
        </div>
        <div className="button"
        onClick={() => location.href = '/rifas'}>
          <ListaNumerada className='menuIcon' id='listanumerada'/>
          <p>Rifas</p>
        </div>
      </div>
    </div>
  )
}