import React from 'react'

const Navbar = () => {
  return (
   <nav >
    <ul className='flex flex-row items-center p-3 justify-evenly '>

      <li className='flex flex-row items-center'>
       <img src="./starburst.png" alt="" className="w-7 h-7" />
     <p className='font-semibold'>
         &nbsp;/&nbsp;Nuस्खा
     </p>
      </li>
    
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
   </nav>
  )
}

export default Navbar