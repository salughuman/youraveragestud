import React from 'react'
import { motion } from 'framer-motion';
const About = () => {
    return (
        <motion.section name='about' className="bg-primary-200 container mx-auto rounded-2xl lg:h-screen  my-32 sm:h-auto"
        initial={{ y: 25, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{duration: 0.5 }}>
            <div className="sm:flex flex-col overflow-hidden py-20 items-center justify-center max-w-5xl  md:flex-row md:mx-auto md:py-28 ">
                <img
                    src="./about.png"
                    alt="My image"
                    className="w-[350px] h-[400px] mx-auto md:h-[500px] md:w-[500px] md:mr-4 rounded-3xl"
                />
                <div className='md:text-left md:pl-7'>
                    <p className="text-white pl-8 mt-4 md:text-white font-bogart text-3xl md:text-4xl lg:text-4xl leading-tight md:pl-0">I am Salman, I am currently working as a Front End Developer at Affinity Studios Lahore, Pakistan.</p>
                    <p className='text-white font-light  px-8 py-8 text-lg md:pl-0'>After years of tinkering with circuits and conducting electrical experiments, I decided to channel my inner nerd and become a frontend web developer. With my mad skills in HTML, CSS, and React, I can create websites that are not only functional, but also a feast for the eyes.</p>
                    <p className='text-white px-8 font-extralight text-lg md:pl-0'>When I'm not coding, you can find me playing video games or nerding out about the latest tech trends. Let's make the internet great (and good-looking) again!</p>
                </div>

            </div>
        </motion.section>

    );
}


export default About