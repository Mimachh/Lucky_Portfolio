import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

import AnimatedText from '@/components/AnimatedText'

import EntrepriseCard from '../EntrepriseCard'
import Layout from '@/components/Layout'

import entreprise1 from '../../../public/images/entreprises/jean.jpg'
import entreprise2 from '../../../public/images/entreprises/kokuban.jpg'
import entreprise3 from '../../../public/images/entreprises/nutrimeaLogo.jpg'
import entreprise4 from '../../../public/images/entreprises/vdf.png'
import entreprise5 from '../../../public/images/entreprises/vivrefrancais.webp'
import entreprise6 from '../../../public/images/entreprises/denis.jpg'





const FramerImage = motion(Image);

const divEntreprise = {
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

const vignetteEntreprise = {
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


const OnHoverImage = ({ hoveredImage, image, alt }) => {
    const [hover, setHover] = useState(false);
    return (
      <div
        style={{ width: "300px", height: "300px" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? (
            <div className='relative'>
                
                <div className='relative h-[300px] z-10 text-light backdrop-blur-sm flex
                justify-center items-center text-center'>
                    <p>Text descipriton Jean messiah</p>
                </div>
                <div className='absolute inset-0 z-0'>
                    <Image src={hoveredImage} alt={alt} className=''/>
                </div>
            </div>

        ) : (
          <Image src={hoveredImage} alt={alt} />
        )}
      </div>
    );
  };


const EntrepriseWrap = ({title, img, link, tooltip}) => {

    return(
        <article className='flex flex-col items-center justify-center rounded-2xl border relative
        border-solid border-dark bg-light p-1  dark:bg-dark dark:border-light xs:p-4'>

            <div
            className='relative z-1 w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className=" aspect-1/1 lg:h-[275px] lg:w-[275px] xl:h-[300px] xl:w-[300px] h-[300px] w-[300px]" 
                whileHover={{scale:1.08}}
                transition={{duraction:0.2}}
                priority
                />

                <div className='absolute z-3 top-0 left-0  mt-4 flex items-center justify-between'>
                    <div class="w-full px-4 sm:w-full lg:w-full">
                        <div class="mb-14">
                            <div class="group relative">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                </svg>
                                <div
                                    class=" absolute left-full top-0 z-20 ml-3  whitespace-pre-wrap rounded  bg-dark py-[12px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-90"
                                >
                                    <span
                                    class="absolute left-[-3px] top-2 -z-10 h-2 w-2  rotate-45 rounded-sm bg-dark"
                                    ></span>
                                    <div className=''>
                                    {tooltip}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </article>
    )
}



const Entreprises = () => {

    const targetRef = useRef(null);
    
  return (
    <section ref={targetRef} className='w-full mb-16 flex flex-col items-center justify-center dark:text-light min-h-screen mt-[5vh]'>
        
        <Layout className='pt-8'>
        <AnimatedText text="Ils m'ont fait confiance..." className='mb-32 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />

        <OnHoverImage 
        hoveredImage={entreprise1}
        image={entreprise2}
        alt="test"
        />

            <motion.div className='flex gap-8 flex-wrap justify-center items-center'
                initial="initial"
                variants={divEntreprise}
                whileInView="animate"
            >
                <motion.div
                variants={vignetteEntreprise}
                >
                <EntrepriseWrap 
                    title="/"
                    img={entreprise1}
                    link="/"
                    tooltip="Haut fonctionnaire et 
                    personnalité politique française"
                />
                </motion.div>

                <motion.div
                variants={vignetteEntreprise}
                >
                <EntrepriseWrap 
                    title="/"
                    img={entreprise2}
                    link="/"
                    tooltip="/"
                />
                </motion.div>

                <motion.div
                variants={vignetteEntreprise}
                >
                <EntrepriseWrap 
                    title="/"
                    img={entreprise3}
                    link="/"
                    tooltip="Marque de compléments alimentaires N•1 en Europe!"
                />
                </motion.div>

                <motion.div
                variants={vignetteEntreprise}
                >
                <EntrepriseWrap 
                    title="/"
                    img={entreprise4}
                    link="/"
                    tooltip="/"
                />
                </motion.div>

                <motion.div
                variants={vignetteEntreprise}
                >
                <EntrepriseWrap 
                    title="/"
                    img={entreprise5}
                    link="/"
                    tooltip="Cercle de réflexion fondé par Jean Messiha"
                />
                </motion.div>

                <motion.div
                variants={vignetteEntreprise}
                >
                <EntrepriseWrap 
                    title="/"
                    img={entreprise6}
                    link="/"
                    tooltip="Ex-cadre du parti Reconquête, Président de « Rassemblons Cagnes! »"
                />
                </motion.div>
            </motion.div>
            <p className='bg-light text-dark'>text</p>
        </Layout>
    </section>
  )
}

export default Entreprises