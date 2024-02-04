import React from 'react'
import slider1 from '../../assets/images/slider1.png'
import slider2 from '../../assets/images/slider2.png'
import slider3 from '../../assets/images/slider3.png'
import slider4 from '../../assets/images/slider4.png'

const Slider = () => {
  return (
        <div className='gap-[10px] flex justify-between flex-wrap px-6 md:px-0'>
            
            <img src={slider1} alt="" />
            <img src={slider2} alt="" />
            <img src={slider3} alt="" />
            <img src={slider4} alt="" />
        </div>
  )
}

export default Slider