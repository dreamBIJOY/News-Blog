import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { CgBorderStyleSolid } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosArrowDown } from 'react-icons/io'
import { PiTelegramLogo } from 'react-icons/pi'
import Logo from '../../../assets/image/logo.svg'

function NavbarSection() {
  return (
    <div>
    {/*  {Web Screen} */}
        <div className='hidden md:block shadow-md'>
        <div className='flex items-center justify-between w-11/12 mx-auto py-8'>
            
            <div>
            <img className='w-[160px]' src={Logo} alt="" />
            </div>
            
            <div className='flex items-center gap-8  text-2xl font-Inter text-gray-700 ml-72'>
                    
                    <div className='flex items-center gap-1'>
                    <p>Home</p>
                    <IoIosArrowDown className='mt-1' />
                    </div>
                    <p>Lifestyle</p>
                    <div className='flex items-center gap-1'>
                    <p>Features</p>
                    <IoIosArrowDown className='mt-1' />
                    </div>
                    <div className='flex items-center gap-1'>
                    <p>Post Layout</p>
                    <IoIosArrowDown className='mt-1' />
                    </div>
                    <p>Contact</p>
                    <div className='flex items-center'>
                    <button className='btn border-none px-6 py-6 text-xl rounded-md bg-[#ff5671] text-white '><PiTelegramLogo size={25} />Join Us</button>
                    </div>
                    
            </div>

            <div className='flex items-center gap-10 text-gray-600'>
                    <BiSearchAlt  size={40} />
                    <CgBorderStyleSolid size={30} className='rotate-90' />
                    <input type="checkbox" defaultChecked className="toggle text-gray-600" />
                    <GiHamburgerMenu size={40} />
            </div>
            
        </div>
        </div>

    {/*  {Mobile Screen} */}
        <div>

        </div>
    </div>
  )
}

export default NavbarSection