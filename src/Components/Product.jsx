import React from 'react'
import axios from 'axios'
import { useEffect , useState } from 'react'

const Product = () => {
  const [products ,setProducts]=useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>setProducts(res.data.products))

  },[])
  
  return (
    <div>
        <div className='py-6 px-6'>
              <h1 className=' text-[2rem] font-semibold'>Our Products </h1>
              <hr className='w-16 h-[1.5px] mx-auto  bg-[#ff405f] md:my-5 ' />
            </div>
        <div className='flex flex-wrap px-7'>{products.map((item)=>(
            <div className='  py-5 px-[20px] '>
            <div className=' border-[1px]  h-[350px] w-[250px] rounded-[10px]  bg-white overflow-hidden'>
              <img className=' bg-[#fbfbfb]' src={item.thumbnail} alt="" />
              <div className='bg-white h-full '>
                <h6 className=' font-semibold hover:text-[#ff405f] text-[12px] py-2'>{item.title}</h6>
                <p className='font-semibold text-[#ff405f] '>{item.price}$ <span className=' text-black opacity-[0.6] line-through font-medium pl-2 '>{item.discountPercentage}$</span></p>
                <div className='flex gap-5 py-4 justify-center'>
                  <button c><i class="fa-solid fa-cart-plus"></i></button>
                  <button><i class="fa-regular fa-heart"></i></button>
                </div>
                
              </div>

            </div>
            
          </div>
          
        ))}</div>
        

      
        
        
      
    </div>
  )
}

export default Product
