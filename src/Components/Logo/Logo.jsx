import React from 'react'
import Logo1 from '../../assets/images/Logo1.png'
import Logo2 from '../../assets/images/Logo2.png'
import Logo3 from '../../assets/images/Logo3.png'
import Logo4 from '../../assets/images/Logo4.png'

const Logo = () => {
  return (
    <div className='bg-[#fff]'>
        <div className='max-w-container mx-auto py-[50px] md:py-[117px]'>
            <div className='md:flex md:justify-between px-6 md:px-0'>
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Logo