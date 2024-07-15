import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import banner1 from './Assets/images/banner1.jpg'
import banner2 from './Assets/images/banner2.jpg'
import banner3 from './Assets/images/banner3.jpg'

const Home = () => {
  const [exproducts, setExproducts]=useState([]);

  useEffect(()=>{
     
     axios.get("https://dummyjson.com/products?limit=6&select")
     .then( (res)=> setExproducts(res.data.products) )



 },[]);
  
  return (
    <div>



      <div className=''>
        <div className=''> 
          <img className='' src={banner1} alt="banner" />
          <div className='absolute top-[30%] left-[200px] text-start '>
              <h3 className=' text-[20px] font-semibold text-gray-700'>Get up to 50% off Today Only!</h3>
              <h1 className='text-[60px] font-bold text-gray-700'>Wooden Chair <br /> Collection</h1>
              <button className=' my-4 border-[1px] rounded-[50px] w-[150px] py-3 border-[#ff405f] text-[#ff405f] hover:bg-[#ff405f] hover:text-white '>SHOP NOW</button>
          </div>
        </div>
          <div className=' absolute flex gap-2 left-[50%] top-[85%] '>
            <div className=' text-[#737373] hover:text-[#ff324d]'><i class="fa-regular fa-circle-dot"></i></div>
            <div className=' text-[#737373] hover:text-[#ff324d]'><i class="fa-regular fa-circle-dot"></i></div>
            <div className=' text-[#737373] hover:text-[#ff324d]'><i class="fa-regular fa-circle-dot"></i></div>
          </div>
      </div>
      
        

        <div className=' py-10 pl-10 pr-10 flex  '>
          <div className=' flex border-[1px] border-gray-100 py-5 px-[100px]'>
            <div className=' text-[#ff405f] py-10 pr-5'><i class="fa-solid fa-truck-fast fa-2xl"></i></div>
            <div className=' text-start py-1'>
              <h6 className=' font-bold'>Free Delivery</h6>
              <p>Worldwide</p>
            </div>
          </div>
          <div className=' flex border-[1px] border-gray-100 py-5 px-[100px]'>
            <div className=' text-[#ff405f] py-10 pr-5'><i class="fa-solid fa-money-bill-transfer fa-2xl"></i></div>
            <div className=' text-start py-1 '>
              <h6 className=' font-bold'>Money Returns</h6>
              <p>30 Days money return</p>
            </div>
          </div>
          <div  className=' flex  border-[1px] border-gray-100 py-5 px-[100px]'>
            <div className=' text-[#ff405f] py-10 pr-5'><i class="fa-solid fa-headset fa-2xl"></i></div>
            <div className=' text-start py-1'>
              <h6 className=' font-bold'>27/4 Online Support</h6>
              <p>Customer Support</p>
            </div>
          </div>
          <div  className=' flex border-[1px] gap-2  border-gray-100 py-5 px-[100px]'>
            <div className=' text-[#ff405f] py-10 pr-5'><i class="fa-solid fa-money-check-dollar fa-2xl"></i></div>
            <div className=' text-start py-1'>
              <h6 className=' font-bold'>Payment Security</h6>
              <p>Safe Payment</p>
            </div>
          </div>

         

        </div>

          {/* Exclusive Products */}
          <section>
            {/* header */}
            <div className='py-6 px-6'>
              <h1 className=' text-[2rem] font-semibold'>Exclusive Products </h1>
              <hr className='w-16 h-[1.5px] mx-auto  bg-[#ff405f] md:my-5 ' />
            </div>
            {/* product section */}
            <div className='flex flex-wrap px-[70px]'>{exproducts.map((exitem)=>(
               <div className='  py-7 px-[100px] '>
               <div className=' border-[1px]  h-[350px] w-[250px] rounded-[10px]  bg-white overflow-hidden'>
                 <img className=' bg-[#fbfbfb]' src={exitem.thumbnail} alt="" />
                 <div className='bg-white h-full '>
                   <h6 className=' font-semibold hover:text-[#ff405f] text-[12px] py-2'>{exitem.title}</h6>
                   <p className='font-semibold text-[#ff405f] '>{exitem.price}$ <span className=' text-black opacity-[0.6] line-through font-medium pl-2 '>{exitem.discountPercentage}$</span></p>
                   <div className='flex gap-5 py-4 justify-center'>
                     <button ><i class="fa-solid fa-cart-plus"></i></button>
                     <button><i class="fa-regular fa-heart"></i></button>
                   </div>
                   
                 </div>
   
               </div>
               
             </div>
            ))}</div>
            


          </section>








    </div>
  )
}

export default Home
