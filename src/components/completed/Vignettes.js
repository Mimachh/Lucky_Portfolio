import React, { useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import img1 from '../../../public/images/photomontage/1/complete.png'
import img2 from '../../../public/images/photomontage/1/alex.png'

import minia1 from '../../../public/images/miniatures/minia1.png'
import minia2 from '../../../public/images/miniatures/minia2.png'

const FramerImage = motion(Image);

const divVignette = {
    initial: {
        opacity:0,
    },
    animate: {
        opacity:1,
        transition: {
            delay:0.05,
            staggerChildren: 0.5
        }
    }
}

const vignette = {
    initial: {
        opacity:0,
        y:100,
    },
    animate: {
        opacity:1,
        y:0,
        transition: {
            duration: 1
        }
    }
}

const Project = ({title, type, img, link, github}) => {

    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border
        border-solid border-dark bg-light p-2 relative dark:bg-dark dark:border-light xs:p-4
        '>
            <div className='absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[101%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duraction:0.2}}
                priority
                />
            </Link>
                {/* <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                    </Link>
                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target="_blank"
                        className='text-lg font-semibold underline dark:text-light md:text-base'
                        >Visit
                        </Link>
                        <Link href="/" className='w-8 dark:text-light md:w-6' target="_blank">Icon</Link>
                    </div>
                </div> */}
        </article>
    )
}

const Vignettes = () => {

    const ref = useRef(null)

  return (
    <section ref={ref} className='relative flex w-full  flex-col items-center justify-center dark:text-light min-h-screen'>
        <Layout className='pt-8 '>
            <div className='absolute lg:relative lg:mb-16 md:mb-16 top-4 xl:top-16 left-1/2 -translate-x-1/2'>
                <div className='xl:block flex justify-center items-center'>
                    <AnimatedText text="Miniatures" className='z-10 mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 mx-4' />
                    <AnimatedText text="Youtube" className='z-10 mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl !text-red-700 sm:mb-8 mx-4' />
                </div>
            </div>
            <motion.div  className='grid grid-cols-12 gap-24 gap-y-16 xl:gap-x-8 lg:gap-x-8 md:gap-y-8 sm:gap-x-0'
                initial="initial"
                variants={divVignette}
                whileInView="animate"
                // viewport={{once: true}}
            >
                <motion.div className='lg:col-span-12 col-span-4 text-light'
                    variants={vignette}
                >
                    <Project 
                         title="Crypto Screener Application"
                         img={img1}
                         link="/"
                         github="/"
                         type="Featured Project"
                    />
                </motion.div>
                <motion.div className='lg:col-span-12 col-span-4 text-light'
                    variants={vignette}
                >
                    <Project 
                         title="Crypto Screener Application"
                         img={minia1}
                         link="/"
                         github="/"
                         type="Featured Project"
                    />
                </motion.div>
                <motion.div className='lg:col-span-12 col-span-4 text-light'
                    variants={vignette}
                >
                    <Project 
                         title="Crypto Screener Application"
                         img={minia2}
                         link="/"
                         github="/"
                         type="Featured Project"
                    />
                </motion.div>
            </motion.div>
        </Layout>
    </section>
  )
}

export default Vignettes