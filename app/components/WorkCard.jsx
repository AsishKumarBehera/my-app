import { assets } from '@/assets/assets'
import React from 'react'

const WorkCard = ({title, main}) => {
  return (
    <div className='md:p-6 flex flex-col h-[300px] w-80 border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' style={{ backgroundImage: `url(${assets.moon_icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> 
                <h3>{title}</h3>  
                <p>{main}</p>
                <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
                </div>
            </div>
  )
}

export default WorkCard