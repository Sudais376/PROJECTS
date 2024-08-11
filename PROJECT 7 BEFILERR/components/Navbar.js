import React from 'react'

const Navbar = () => {
    return (
        <header className='bg-white py-5 px-6 md:px-28'>
            <nav className='flex justify-center lg:justify-between items-center max-w-[1400px] mx-auto'>
                <div>
                    <img src="https://www.befiler.com/assets/images/logo.png" width={192} height={48} alt="" />
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                    <ul className='flex justify-center items-center gap-4'>
                        <li className='font-semibold text-slate-400 hover:text-slate-500 cursor-pointer'>TAX TOOLS</li>
                        <li className='font-semibold text-slate-400 hover:text-slate-500 cursor-pointer'>RESOURCES</li>
                        <li className='font-semibold text-slate-400 hover:text-slate-500 cursor-pointer'>BUSINESS SERVICES</li>
                        <li className='font-semibold text-slate-400 hover:text-slate-500 cursor-pointer'>TAX SALES</li>
                        <li className='hidden xl:flex gap-1 font-semibold text-slate-400 hover:text-slate-500 cursor-pointer'><img className='rounded-full' src="https://www.befiler.com/assets/images/usa-services/usa-flag.png" width={16} height={16} alt="" />USA SERVICES</li>
                    </ul>
                    <div className='btns hidden xl:flex justify-center items-center'>
                        <button className='text-[#f47e5f] px-4 py-2 border border-[#f47e5f] rounded-md mx-4 hover:bg-[#ec1c24] hover:text-white'>Sign up</button>
                        <div className='flex gap-2 justify-center items-center bg-[#ec1c24] border border-white px-4 py-2 rounded-md'>
                            <img src="https://www.befiler.com/assets/images/icon/lock.png" alt="" />
                            <button>Sign in</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
