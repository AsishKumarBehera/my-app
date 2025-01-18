import { assets } from '@/assets/assets'
import font from '@/assets/font.png'
import React from 'react'
import { motion } from 'framer-motion';
import WorkCard from './WorkCard'
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
            <h2 className='text-center text-5xl font-Ovo'>My Work</h2>
        <div className='text-black bg-gradient-to-b to-[#d3d1d5] py-18' >
            <div className='max-w-[1200px] mx-auto space-y-24'>
                {projects.map((project, index) => (
                    <motion.div key={index}
                    initial={{opacity: 0, y:75}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.25}}
                    className={`flex ${index % 2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12": "flex-col md:flex-row"}`} >
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