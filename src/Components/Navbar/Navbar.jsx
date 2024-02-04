import React, { useState } from 'react'
import Logo from '../../assets/images/Logo.png'
import {FaBars} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleClick = () =>{
        setShow(!show)
    }
  return (
    <div className='bg-primary py-[30px]'>
        <div className='max-w-container mx-auto px-[10px] md:px-0'>
            <div className='flex justify-between items-center'>
            <div className='w-1/5'>
                <img src={Logo} alt="logo"/>
            </div>
            <div className='flex justify-end'>
                <div onClick= {handleClick} className='block md:hidden'>
                    {
                        show == true ? <RxCross2 className="text-white text-2xl"/> : <FaBars className="text-white text-2xl"/>
                    }
                </div>
            <div className='w-4/5'>
                <ul className={`md:flex justify-end gap-x-14 md:static w-full absolute top-[-200px] left-0 px-4 md:px-0 z-[999] ${show == true ? 'top-[188px] bg-green-500 w-full py-[20px] md:bg-primary md:py-0' : 'top-[-255px] bg-green-500 py-[20px] md:bg-primary md:py-0'}`}>
                    <li className='mb-[10px] md:mb-0'><a href="" className='font-pops text-base font-semibold text-white'>Home</a></li>
                    <li className='mb-[10px] md:mb-0'><a href="" className='font-pops text-base font-semibold text-white'>About</a></li>
                    <li className='mb-[10px] md:mb-0'><a href="" className='font-pops text-base font-semibold text-white'>Services</a></li>
                    <li className='mb-[10px] md:mb-0'><a href="" className='font-pops text-base font-semibold text-white'>Gallery</a></li>
                    <li className='mb-[20px] md:mb-0'><a href="" className='font-pops text-base font-semibold text-white gap-x[5px]'>Blog</a></li>
                    <li><a href="" className='font-pops text-base font-semibold text-white md:border-2 md:px-[32px] md:py-[13px] gap-y-2'>CONTACT</a></li>
                </ul>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar