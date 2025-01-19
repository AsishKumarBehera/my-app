import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-10'>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            basishkumar54@gmail.com
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 AsishKumarBehera. All Rights Reserved.</p>
            <ul className='flex items-center gap-1 justify-center mt-4 sm:mt-0'><li><a target='_blank' href="https://github.com/AsishKumarBehera">GitHub</a></li></ul>
            <ul><li><a target='_blank' href="https://www.linkedin.com/in/asish-kumar-behera-669920277/">LinkedIn</a></li></ul>
        </div>
    </div>
  )
}

export default Footer