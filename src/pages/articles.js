import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import article1 from "../../public/images/articles/create loading screen in react js.jpg"
import article2 from "../../public/images/articles/create modal component in react using react portals.png"
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import article4 from "../../public/images/articles/smooth scrolling in reactjs.png"
import article5 from "../../public/images/articles/todo list app built using react redux and framer motion.png"

import {motion, useMotionValue} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event)  {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event)  {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }
    
    return(
        <Link href={link} target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
            style={{x:x, y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:0.2}}}
            ref={imgRef} src={img} alt={title} className='w-96 z-10 h-auto hidden absolute md:!hidden
            rounded-lg'/>
        </Link>
    )
} 

const Article = ({img, title, date, link}) => {

    return(
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"} }}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl
        flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light dark:border-light first:mt-0 border
        border-solid border-dark border-r-4 border-b-4 sm:flex-col'>
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {

    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark dark:bg-dark dark:border-light
        rounded-2xl relative'>
            <div className='absolute top-1 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
            rounded-br-3xl dark:bg-light' />

            <Link href={link} target="_blank"
            className='inline-block w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duraction:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 underline dark:text-light
                xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 dark:text-light'>
                {summary}
            </p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>
                Karl Muller | Articles Page
            </title>
            <meta name='description' content='Quelques infos à propos de moi' />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World!" className='mb-16
                lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl lg:gap-8 md:gap-y-16'/>
                <ul className='grid grid-cols-2 gap-16 md:grid-cols-1'>
                    <FeaturedArticle 
                    link="/"
                    img={article1}
                    title="Build A Custom Pagination Component In Reactjs From Scratch"
                    summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
                    "
                    time="9 min read"
                    />

                    <FeaturedArticle 
                    link="/"
                    img={article2}
                    title="Build A Custom Pagination Component In Reactjs From Scratch"
                    summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
                    "
                    time="9 min read"
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All articles</h2>
                <ul>
                    <Article 
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={article3}
                    date="March 22, 2023"
                    link="/"
                    />

                    <Article 
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={article4}
                    date="March 22, 2023"
                    link="/"
                    />

                    <Article 
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={article5}
                    date="March 22, 2023"
                    link="/"
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles