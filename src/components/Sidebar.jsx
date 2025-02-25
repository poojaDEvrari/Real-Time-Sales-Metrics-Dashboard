import React from 'react'
import {Octagon,KeySquare,Box,Users,Wallet,BadgePercent,FileQuestion,ChevronDown } from 'lucide-react'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <Octagon strokeWidth={2} className='icon_header'/> DASHBOARD
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                
                <KeySquare strokeWidth={1} className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <Box strokeWidth={1}  className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <Users strokeWidth={1}  className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <Wallet strokeWidth={1}  className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <BadgePercent strokeWidth={1} className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <FileQuestion strokeWidth={1} className='icon'/> Help 
                </a>
            </li>
            <li className='sidebar-list-item user-login-display '>
            <div className='user-and-name'>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=''/>
            <div>
            <p className='emp-name'>Bharat R.</p>
            <p className='emp-role'>Project Manager</p>
            </div>
            
            </div>
            <div className='see-more'>
            <a href="">
            <ChevronDown strokeWidth={1} className='icon'/> 
            </a>
            </div>
              
    
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar