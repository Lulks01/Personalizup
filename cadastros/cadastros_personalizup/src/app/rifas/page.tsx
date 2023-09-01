import BarraLateral from "../components/barralateral";
import './rifas.css'

import Main from "./rifas";

export default function Rifas() {

  

  return(
    <div className="main">
      <BarraLateral/>
      <div className="rifas">
        <div className='topside'>
          Rifas
        </div>
        <Main/>
      </div>
    </div>
  )
}