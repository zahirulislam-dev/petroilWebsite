import React from 'react'

const Blog = () => {
  return (
    <div className='bg-[#F0F0F0] py-[50px] md:py-[110px]'>
        <div className='max-w-container mx-auto'>
          <div className='md:flex md:justify-between mb-[5px]'>
            <div className='bg-blogone bg-cover bg-norepeat bg-center'>
                  <div className='bg-overlay pt-[75px] pb-[56px]'>
                      <div className='ml-[46px] mr-[44px]'>
                        <h3 className='font-pops font-bold text-[24px] text-[#fff] mb-[52px] w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                        <a href="" className='font-pops font-semibold text-[12px] text-[#fff] px-[30px] py-[14px] bg-background mb-[56px]'>Read more</a>
                      </div>
                  </div>
            </div>
            <div className='bg-blogtwo bg-cover bg-norepeat bg-center'>
                  <div className='bg-overlay pt-[75px] pb-[56px]'>
                      <div className='ml-[46px] mr-[44px]'>
                        <h3 className='font-pops font-bold text-[24px] text-[#fff] mb-[52px] w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                        <a href="" className='font-pops font-semibold text-[12px] text-[#fff] px-[30px] py-[14px] bg-background mb-[56px]'>Read more</a>
                      </div>
                  </div>
            </div>
            <div className='bg-blogthree bg-cover bg-norepeat bg-center'>
                  <div className='bg-overlay pt-[75px] pb-[56px]'>
                      <div className='ml-[46px] mr-[44px]'>
                        <h3 className='font-pops font-bold text-[24px] text-[#fff] mb-[52px] w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                        <a href="" className='font-pops font-semibold text-[12px] text-[#fff] px-[30px] py-[14px] bg-background mb-[56px]'>Read more</a>
                      </div>
                  </div>
            </div>
          </div>
            <div className='mt-[28px] flex justify-end'>
              <a href="" className='font-pops font-bold text-[16px] text-[#000]'>MORE FROM THE BLOG</a>
              {/* ARROW ICONS */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M17.2021 13.3301L10.5615 19.9707C10.1025 20.4297 9.36035 20.4297 8.90625 19.9707L7.80273 18.8672C7.34375 18.4082 7.34375 17.666 7.80273 17.2119L12.5098 12.5049L7.80273 7.79785C7.34375 7.33887 7.34375 6.59668 7.80273 6.14258L8.90137 5.0293C9.36035 4.57031 10.1025 4.57031 10.5566 5.0293L17.1973 11.6699C17.6611 12.1289 17.6611 12.8711 17.2021 13.3301Z" fill="black"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Blog