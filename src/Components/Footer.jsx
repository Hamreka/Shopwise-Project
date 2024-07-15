import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-5'>
        <footer className='bg-[rgb(32,35,37)] w-full h-[600px] '>
            <div className=' flex justify-between  py-32  text-white font-pop text-left px-[200px] '>
                <ul className=''><span className=' font-bold text-[17px] '>Contact Info</span>
                    <li className='text-[15px] pt-6 '><span className='pr-3'><i class="fa-sharp fa-solid fa-location-dot"></i></span> 123 Street, Old Trafford, NewYork, USA</li>
                    <li className='text-[15px] pt-5'><span className='pr-4'><i class="fa-regular fa-envelope"></i></span>info@sitename.com</li>
                    <li className='text-[15px] pt-5'><span className='pr-3'><i class="fa-solid fa-mobile-screen"></i></span> + 457 789 789 65</li>
                    <ul className='flex gap-5 '>
                        <li className='text-[#3b5998] text-[25px] py-6 cursor-pointer'><i class="fa-brands fa-facebook-f"></i></li>
                        <li className='text-[#00acee] text-[25px]  py-6 cursor-pointer'><i class="fa-brands fa-twitter"></i></li>
                        <li className='text-[#dd4b39] text-[25px]  py-6 cursor-pointer'><i class="fa-brands fa-google-plus-g"></i></li>
                        <li className='text-[#c4302b] text-[25px]  py-6 cursor-pointer'><i class="fa-brands fa-youtube"></i></li>
                        <li className='text-[#3f729b] text-[25px]  py-6 cursor-pointer'><i class="fa-brands fa-instagram"></i></li>
                    </ul>
                </ul>
                <ul><span className='font-bold text-[17px]'> Useful Links</span>
                    <li className='hover:text-red-500 cursor-pointer pt-6'>About Us</li>
                    <li className='hover:text-red-500 cursor-pointer pt-3'>FAQ</li>
                    <li className='hover:text-red-500 cursor-pointer pt-3'>Location</li>
                    <li className='hover:text-red-500 cursor-pointer pt-3'>Affiliates</li>
                    <li className='hover:text-red-500 cursor-pointer pt-3'>Contact</li>
                </ul>
                <ul><span className='font-bold text-[17px]'>MyAccount</span>
                    <li className='hover:text-red-500 cursor-pointer pt-6'>Discount</li>
                    <li className='hover:text-red-500 cursor-pointer pt-3'>Returns</li>
                    <li className='hover:text-red-500 cursor-pointer pt-3'>Orders History</li>
                    <li className='hover:text-red-500 cursor-pointer pt-3'>Order Tracking</li>
                   
                </ul>
                <div className=''>
                    <h1 className='font-bold text-[17px] '>Subscribe Our Newsletter</h1>
                    <p className='pt-6'>If you want to get an email from us every time we <br /> have a new special offer, then sign up here!</p>
                    <div className=' my-4  bg-white w-[400px] h-[50px] rounded-[50px] relative'>
                        
                        <div className=' '><input className=' text-black  h-[50px] rounded-[60px] border-none outline-none pl-5 w-[350px]' type="text" placeholder='Enter Mail Address ' /></div>
                        <div className='  absolute bg-red-600 w-10 h-10 rounded-[50px] right-[6px] top-[6px] cursor-pointer  '><span className='block py-[8px] px-[8px]'><i class="fa-regular fa-envelope fa-xl"></i></span></div>
                        
                    </div>
                </div>
            </div>



            
        </footer>
      
    </div>
  )
}

export default Footer
