import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../../public/images/profile/Lucky.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'

import camera from "../../../public/images/svgs/camera.svg"



import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion'

const HomePage = () => {
  return (
    <section className='flex items-center text-dark w-full min-h-screen dark:text-light 2xl
    border-b-2 border-dark dark:border-light
    '>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
            <div className='flex items-center justify-between w-full lg:flex-col'>
                <div className='w-1/2 md:w-full'>
                <Image src={profilePic} alt='Karl' className='w-full h-auto lg:hidden md:inline-block md:w-full' 
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                />
                </div>
                <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center' >
                <AnimatedText text="Lucky Muller, monteur vidéo."
                className='!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                {/* <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                        As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                        Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p> */}

                <div className='typeWriter my-5'>
                    <h2 className='font-semibold !text-4xl text-left xl:!text-3xl lg:!text-center lg:!text-2xl md:!text-2xl sm:!text-xl'>Mes logiciels de montage :</h2> 
                        <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                        typewriter.typeString('<span class="text-5">DaVinci Resolve.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class="text-2">Premiere Pro.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class="text-3">After Effect.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        // .typeString('<span class="text-4">Paint 🤪</span>')
                        // .pauseFor(2000)
                        // .deleteAll()
                        .typeString('<span class="text-1">Photoshop.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                        }}
                        />
                </div>


                <div className='flex items-center self-start mt-2 lg:self-center '>
                    <Link href="#montage"
                    className='z-10 flex items-center bg-dark text-light 
                    p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                    border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                    hover:dark:border-light md:p-2 md:px-4 md:text-base'
                    >
                    Voir mes travaux
                    <motion.span
                        initial={{y:0}}
                        whileInView={{y:5, transition:{duration:0.9, ease:"easeInOut", repeat:Infinity} }}
                    >
                        <LinkArrow className={"w-6 ml-1"} />
                    </motion.span>
                    
                    </Link>
                    {/* <Link href="mailto:karl.mullr@gmail.com" target={"_blank"}
                    className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
                    >Contact</Link> */}
                </div>
                </div>
            </div>
        </Layout>
        
        <div className='absolute right-8 bottom-8 inline-block w-48 md:hidden'>
        <Image src={camera} alt='Karl Muller' className='w-full h-auto' />
        </div>
    </section>
  )
}

export default HomePage
