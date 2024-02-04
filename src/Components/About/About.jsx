import React from 'react'

const About = () => {
  return (
    <div className='bg-[#F0F0F0] py-[50px] md:py-[136px]'>
        <div className='max-w-container mx-auto'>
            <div className='md:flex'>
            <div className='pt-[100px] pb-[99px] bg-overlay2'>
                <h4 className='font-pops text-[23px] md:text-[36px] font-bold text-[#fff] md:w-[262px] md:ml-[74px] md:mr-[77px] px-6 md:px-0'>
                    Learn more about our company
                </h4>
            </div>
                <div className='bg-aboutPic bg-cover bg-no-repeat bg-center py-[168px] w-full h-full'>
                    <a href="" className='font-pops font-semibold text-[16px] text-[#F40404] px-[30px] py-[14px] bg-[#fff] ml-[100px] md:ml-[282px]'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About