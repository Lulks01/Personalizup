import Form from './form';
import './cadastro.css';


export default function Page() {
  return (
    <div className='cadastro'>
      <div className='pagebtn'>
        <a href="/">
          <div className='btn'>
            <span className='seta'>{'<'}</span> Dashboard
          </div>
        </a>
      </div>
      
      <Form/>
    </div>
  )
}