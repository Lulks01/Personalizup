
import './globals.css';
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