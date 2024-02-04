import React from 'react'

const Banner = () => {
  return (
    <div className='bg-banner bg-cover bg-no-repeat bg-center py-[50px] md:py-[256px] relative after-content[""], after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-overlay after:z-[-1] z-[1]'>
       <div className='max-w-container mx-auto text-center md:text-left px-6 md:px-0'>
            <h1 className='font-pops text-[25px] md:text-[64px] font-bold text-white md:w-[842px] mb-8'>We exist since 1975 on the oil and gas industry.</h1>
            <a href="" className='font-pops text-[16px] font-semibold text-white border-2 px-[42px] py-[14px] bg-primary hover:bg-overlay'>LEARN MORE</a>
       </div>
    </div>
  )
}

export default Banner