import React from 'react'
import {} from 'lucide-react'
import 
 { BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        
        <div className='header-right'>
           <span>Hello, Shahrukh 👋,</span>
        
        </div>
        <div className='header-left'>
            <BsSearch  className='icon search-btn'/>
            <input type='search' placeholder='search' />
        </div>
    </header>
  )
}

export default Header