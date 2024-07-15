
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo  from './Assets/images/logo_dark.png'
import En  from './Assets/images/eng.png'
import Fn  from './Assets/images/fn.png'
import { click } from '@testing-library/user-event/dist/click';

const Nav = () => {
  
  const [ isOpen,setIsOpen]=useState(false);
  
  

  return (
    
    <div className='' >
      <div className=' flex justify-between px-[200px]'>
        <div className='flex gap-2 items-center'>
          <img className=' rounded-[50px] size-4 ' src={En} alt="english" />
          <h1 className='text-[15px] text-gray-700 font-normal'>English</h1>
          <h1 className='text-[15px] text-gray-700 font-normal'>EUR</h1>
          <p className='text-[15px] text-gray-700 font-normal'><span className=' px-1'><i class="fa-solid fa-mobile-retro"></i></span>123-456-7890</p>

        </div>
        <div className='flex gap-3 py-4'>
          <div className=' text-[15px] text-gray-700 font-normal hover:text-[#ff405f]'><Link to=''><span className=' px-1'><i class="fa-solid fa-shuffle"></i></span>Compare</Link></div>
          <div className=' text-[15px] text-gray-700 font-normal hover:text-[#ff405f]'><Link to=''><span className=' px-1'><i class="fa-regular fa-heart"></i></span>Wishlist</Link></div>
          <div className=' text-[15px] text-gray-700 font-normal hover:text-[#ff405f]'><Link to=''><span className=' px-1'><i class="fa-regular fa-user"></i></span>Login</Link></div>

        </div>
        
      </div>
      <nav className='  flex justify-between items-center bg-white border-y border-gray-200 h-[4.5rem] px-[200px]'>
        <div className=''>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className=' flex gap-5 items-center font-pop font-medium text-[15px]  '>
            <li><Link to="/" className=' hover:text-[#ff405f] focus:text-[#ff405f]'>HOME</Link></li>
            <li><a className=' hover:text-[#ff405f] cursor-pointer relative '  onClick={()=> setIsOpen(()=>!isOpen)}>
              PAGES
              {!isOpen ? (
                <><i class="fa-sharp fa-solid fa-chevron-down fa-flip-horizontal fa-2xs"></i></>
              ): (
                <><i class="fa-sharp fa-solid fa-chevron-down fa-flip-vertical fa-2xs"></i></>
              )
            }
            </a>
            {isOpen && (
              <ul  className='bg-white shadow-lg py-2 pl-2 pr-48 my-5 text-start  absolute '>
                <li><Link to="/Product" className=' hover:text-[#ff405f] focus:text-[#ff405f] text-[13px] font-normal'  onClick={()=> setIsOpen(false)}>PRODUCTS</Link></li>
                <li><Link to="/Contact" className=' hover:text-[#ff405f] focus:text-[#ff405f] text-[13px] font-normal' onClick={()=> setIsOpen(false)}>CONTACT US</Link></li>
              </ul>
            )}
            
            </li>
            <li><Link to="/Product" className=' hover:text-[#ff405f]'>PRODUCTS</Link></li>
            <li><Link to="/Contact" className=' hover:text-[#ff405f]'>CONTACT US</Link></li>
          </ul>
    
        </div>
        <div className='flex gap-4'>
              <Link className='hover:text-[#ff405f]' to=""><i class="fa-sharp fa-solid fa-magnifying-glass"></i></Link>
              <Link className='hover:text-[#ff405f]' to=""><i class="fa-sharp fa-solid fa-cart-shopping "></i></Link>
        </div>
        
      </nav>
      
      
    </div>
  )
}

export default Nav
