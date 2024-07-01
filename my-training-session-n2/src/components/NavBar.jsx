import React from 'react'
import {Link } from 'react-router-dom';
// import Home from '../pages/Home';
import { RiShoppingBag3Fill } from "react-icons/ri";
// import Cart from '../pages/Cart'

function NavBar() {
  return (
    <div class="flex w-screen justify-center">
    <div className=' flex border-black rounded-full shadow-yellow-950 shadow-xl bg-white border-2 w-11/12 z-30 mb-6 p-1 fixed'>
      {/* <div class='h-2'></div> */}
        <nav class='w-full'>
          <ul className='flex '>
            <li className='pl-3 font-bold text-xl'> Grocery Store</li>
            <div className='flex pr-3 ml-auto '>
                <li className='mr-3 h-full align-middle text-lg'><Link to="/">Home</Link></li>
                <li className=' mr-0'><Link to="/cart"><RiShoppingBag3Fill size={32}/></Link></li>
            </div>
          </ul>
        </nav>
    </div>
    </div>
    
        
 
  )
}

export default NavBar