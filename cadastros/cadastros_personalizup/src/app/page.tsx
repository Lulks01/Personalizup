import './globals.css';

import Grid from './components/grid';

export default function Page() {

  return (

    <main className='main'>
      <div className='pagebtn'>
        <a href="/cadastro">
          <div className='btn'>
          Cadastro <span className='seta'>{'>'}</span>
          </div>
        </a>
      </div>
      <Grid/>
    </main>
  )
}
