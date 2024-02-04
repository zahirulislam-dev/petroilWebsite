import React from 'react'

const Biggest = () => {
  return (
    <div className='max-w-container mx-auto px-6 md:px-0 md:pt-[78px] md:pb-[28px] py-[40px] md:items-center md:flex md:justify-between'>
        <div className='w-[30%] mr-[178px] mb-[20px] md:mb-0'>
            <h2 className='font-pops  font-bold text-[24px] md:text-[48px] text-black w-[289px]'>
                The biggest supplier on the country
            </h2>
        </div>
        <div className='w-[70%]'>
            <p className='font-pops  font-medium text-[14px] md:text-[16px] text-black w-[333px] md:w-[651px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
        </div>
    </div>
  )
}

export default Biggest