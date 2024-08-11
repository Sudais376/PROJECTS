import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='bg-[#5134b6] p-5'>
        <nav className='container flex justify-center md:justify-between mx-auto items-center px-6 lg:px-36 '>
          <div className='flex gap-10 justify-center items-center'>
            <img src="https://webuildthemes.com/go/assets/images/demo/logo/logo-light.svg" alt="" />
            <ul className='hidden md:flex gap-6 px-4 justify-center items-center'>
              <li className='text-white cursor-pointer hover:text-slate-300'>Home</li>
              <li className='text-white cursor-pointer hover:text-slate-300'>Pages</li>
              <li className='text-white cursor-pointer hover:text-slate-300'>Components</li>
            </ul>
          </div>
          <div className='hidden md:flex justify-center items-center gap-8 text-white px-6 py-2'>
            <button className='hover:text-slate-300'>Sign Up</button>
            <button className='hover:text-slate-300'>Sign in</button>
          </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar
