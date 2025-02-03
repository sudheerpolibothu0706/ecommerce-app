import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-40 my-10'>
       <div className='flex flex-row justify-around py-4'>
        <div className='w-1/3'>
        <img src={assets.logo}></img>
        <p className='w-full text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quis nobis molestias culpa nemo eius fugit esse sequi error. Molestias similique facere quae aliquam! Nisi modi distinctio hic pariatur minus.</p>
       </div>

       <div>
        <p className='text-2xl font-semibold'>COMPANY</p>
        <ul className='cursor-pointer text-gray-400'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
       </div>

       <div>
        <p className='text-2xl font-semibold'>GET IN TOUCH</p>
        <p className='text-gray-400'>sudheerpolibothu@gmail.com</p>
        <p className='text-gray-400'>+91 970320282</p>
       </div>
    </div>
        <div >
            <hr></hr>
            <p className='text-center py-4 '>@Copyrights 2025 Sudheerpolibothu - All Rights Reserved</p>
        </div>
    
    </div>
  )
}

export default Footer
