
import './globals.css';

import Grid from './components/grid';
import Form from './components/form';
import Dashboard from './components/Dashboard';
import BarraLateral from './components/barralateral';


export default function Page({
  children,
}: {
  children: React.ReactNode
}){
  return (
    <main className='main'>
      <BarraLateral/>
      <Dashboard/>
    </main>
  )
}