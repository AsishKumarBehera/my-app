import { assets } from '@/assets/assets'
import font from '@/assets/font.png'
import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image';

const projects = [
    {
           title: 'Ecommerce Digital Products',
           desc: 'lorem',
           devstack:'MongoDB, Express, React, Node.js',
           link: '#',
           git: '#',
           src: font
       },
       {
           title: 'Photography site',
           description: 'Web Design',
           desc: 'lorem',
           devstack:'MongoDB, Express, React, Node.js',
           link: '#',
           git: '#',
           src: font
       },
       {
           title: 'UI/UX designing',
           description: 'UI/UX Design',
           desc: 'lorem',
           devstack:'MongoDB, Express, React, Node.js',
           link: '#',
           git: '#',
           src: font
       },
];

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My latest Work</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 font-Ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>
        <div className=' bg-gradient-to-b py-18' >
            <div className='max-w-[1200px] mx-auto space-y-24'>
                {projects.map((project, index) => (
                    <motion.div key={index}
                    initial={{opacity: 0, y:75}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.25}}
                    className={`flex ${index % 2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12": "flex-col md:flex-row mt-14"}`} >
                        <div className='space-y-2 max-w-[550px] mr-14'>
                            <h2>{`0${index + 1}`}</h2>
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                            <p>{project.devstack}</p>
                           
                        </div>
                        <div className='flex justify-center items-center'> 
                            <Image src={project.src} alt={project.title} className='h-[400px] w-auto object-cover' />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Work