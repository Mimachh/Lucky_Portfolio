import React, { useRef } from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

import AnimatedText from '@/components/AnimatedText'

import outLine from '../../../public/videos/short/short1/Outline Blanc.png'


const FramerImage = motion(Image);
const animationOrder = {
    initial: 0,
    startScrew: 0.2,
    endScrew: 0.35,
    startAppears: 0.4,
    itsAppears: 0.6,
    outlineFadeOut: 0.7
};

const VideoMontage = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(
        scrollYProgress,
        [
            animationOrder.startAppears,
            animationOrder.itsAppears

        ],
        [0, 1]
    );

    const opacityOutline = useTransform(
        scrollYProgress,
        [
            animationOrder.startScrew,
            animationOrder.startAppears,
            animationOrder.itsAppears,

        ],
        [0, 1, 0]
    );

    const z = useTransform(
        scrollYProgress,
        [
            animationOrder.startScrew,
            animationOrder.startAppears,
            animationOrder.itsAppears,
            animationOrder.outlineFadeOut

        ],
        [0, 0, 10, 15]
    );


      const skew = useTransform(
        scrollYProgress,
        [
            animationOrder.startScrew,
            animationOrder.endScrew,

        ],
        ["50deg", "0deg"]
    );

      const scale = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.mid
        ],
        [0.5, 1]
    );

    const x = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.mid
        ],
        ["0%", "0%"]
    );


  return (
    <section ref={targetRef} className=' w-full flex flex-col items-center justify-center dark:text-light min-h-screen mt-[2vh] mb-[50vh]'>
        
        <Layout className='pt-8'>
            <div className='relative h-[250vh]'>
                <div className='z-10 sticky top-8 xl:top-10 lg:top-16 md:top-8 xs:top-4'>
                    <AnimatedText text="Mes travaux vidéos" className='z-10 mb-16 lg:!text-7xl sm:!text-5xl xs:!text-4xl sm:mb-8' />
                </div>

                <div  
                    className='sticky top-1/2 -translate-y-1/2'
                 >
                    <div className='relative translate-x-centered-offset -translate-x-1/2 -translate-y-1/2 scale-[var(--scale)]'

                    >
                        <div className='absolute mt-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 lg:w-3/4 xl:w-1/3 w-1/4 2xl:w-1/4 max-h-[800px] max-w-[450px]'>
                            <FramerImage src={outLine} alt="" className=""
                                style={{
                                    opacity: opacityOutline,
                                    skew 
                                }}
                                />
                        </div>
                        <div>
                            <motion.video controls className='absolute mt-10 max-h-[800px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-3/4 xl:w-1/3 w-1/4 2xl:w-1/4 max-w-[450px]'
                            style={{
                                opacity,
                                zIndex: z,
                            }}
                            >
                                <source src={"../videos/short/short1/short1.mp4"} type="video/mp4"/>
                                
                                <p>Votre navigateur ne prend pas en charge les vidéos HTML5.
                                    Voici <a href="myVideo.mp4">un lien pour télécharger la vidéo</a>.</p>
                            </motion.video>
                        </div>
    
                    </div>

                    
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default VideoMontage