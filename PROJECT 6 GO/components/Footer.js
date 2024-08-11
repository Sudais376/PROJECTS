import React from 'react'

const Footer = () => {
  return (
    <footer className='continer flex justify-between items-center px-6 md:px-48 bg-black text-white pb-12'>
      <div className='flex flex-col md:flex-row gap-6'>
        <span className='text-slate-200 font-bold cursor-pointer'>Documentation</span>
        <span className='text-slate-200 font-bold cursor-pointer'>Purchse</span>
      </div>
      <div>
        <img src="https://webuildthemes.com/go/assets/images/demo/logo/logo-light.svg" alt="" />
      </div>
      </footer>
  )
}

export default Footer
