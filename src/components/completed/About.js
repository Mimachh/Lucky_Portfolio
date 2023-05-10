import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from "../../../public/images/profile/LuckyetPoisson.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView) {
          motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
          springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);   
            }
          })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const About = () => {
  return (
    <main className='flex w-full flex-col items-center justify-center dark:text-light min-h-screen'>
        <Layout className='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start xl:items-center justify-start 2xl:col-span-4 xl:col-span-4 lg:order-2 lg:col-span-8'>
                    <h2 className='mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                    <p className='!text-2xl text-left xl:!text-xl lg:!text-center lg:!text-lg md:!text-md sm:!text-sm font-medium'>
                        Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                        and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                        new and innovative ways to bring my clients' visions to life.
                    </p>
                    <p className='my-4 !text-2xl text-left xl:!text-xl lg:!text-center lg:!text-lg md:!text-md sm:!text-sm font-medium'>
                        I believe that design is about more than just making things look pretty – it's about solving problems and 
                        creating intuitive, enjoyable experiences for users. 
                    </p>
                    <p className='!text-2xl text-left xl:!text-xl lg:!text-center lg:!text-lg md:!text-md sm:!text-sm font-medium'>
                        Whether I'm working on a website, mobile app, or 
                        other digital product, I bring my commitment to design excellence and user-centered thinking to 
                        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                    </p>
                </div>

                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light 2xl:col-span-4 xl:col-span-4 lg:order-1 lg:col-span-8'>
                <div className='absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                    <Image alt='Lucky Muller' src={profilePic} className='w-full h-auto rounded-2xl' 
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    />
                </div>
                <div  className='col-span-2 sm:gap-8 flex flex-col justify-center 2xl:space-y-0 space-y-10  2xl:flex-row 2xl:items-center 2xl:col-span-8 lg:order-3'>
                    <div className='flex lg:flex-col  flex-col 2xl:flex-row gap-10'>
                        <div className='flex flex-col items-end justify-center 2xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={10} />M+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm'>Vues en ligne</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center 2xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={400} />k+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm'>Abonnés cumulés</h2>
                        </div>
                    </div>
                    <div className='flex lg:flex-col  flex-col 2xl:flex-row gap-10'>
                        <div className='flex flex-col items-end justify-center 2xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={3} />+
                            </span>
                            <h2 className='text-xl font-medium  text-dark/75 dark:text-light/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm'>Années d'expériences</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center 2xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={5} />+
                            </span>
                            <h2 className='text-xl font-medium  text-dark/75 dark:text-light/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm'>Paires de bretelles</h2>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    </main>
  )
}

export default About