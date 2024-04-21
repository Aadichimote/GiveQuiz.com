import React from 'react'
import logo from '../../public/images/logo.png'



const Navbar = () => {
  return (
    <header className='h-16 shadow-sm flex items-center
    '>
        <nav className='flex justify-between items-center w-9/12 mx-auto' >
            <a href="/"><img src={logo} alt="" /></a>
            <div className='flex items-center space-x-5 '>
                <ul className='sm:flex  items-center space-x-5 hidden '>
                    <li><a href="/">How it Works?</a></li>
                    <li><a href="/">Feature</a></li>
                    <li><a href="/">AboutUs</a></li>
                </ul>
                <button className='font-medium px-5 py-1 border border-[#fcc822] text-[black] rounded' >login</button>
            </div>
</nav>
    </header>
  )
}

export default Navbar
 