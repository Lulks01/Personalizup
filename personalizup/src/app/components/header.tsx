'use client'
import { CartIcon, MenuIcon, PersonalizupLogo, SearchIcon } from "../../../public/Icons";

import './header.css'
export default function Header() {


  return (
    <div className="Header">
      <div className='lefticons'>
        <div id='menuicon'>
          <MenuIcon className="headerIcon"/>
        </div>
        <div id='searchicon'>
          <SearchIcon className="headerIcon"/>
        </div>
      </div>
      <div id='personalizuplogo'>
        <PersonalizupLogo className="headerIcon" id='logo'/>
      </div>
      <div id='carticon'>
        <CartIcon className="headerIcon"/>
      </div>
    </div>
  )
}