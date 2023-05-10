import React, { useRef } from 'react'
import Image from 'next/image'
import alex from "../../public/images/photomontage/1/alex.png"
import helico from "../../public/images/photomontage/1/helico.jpeg"
import jeep from "../../public/images/photomontage/1/jeep.jpg"
import complete from "../../public/images/photomontage/1/complete.png"

import AnimatedText from '@/components/AnimatedText'
import { useScroll, useTransform, motion } from 'framer-motion'


const animationOrder = {

    initial: 0,
    midFadeInOthers: 0.10,
    fadeInOthersEnd: 0.30,
    mainMidFadeIn: 0.40,
    mainFadeInEnds: 0.55,
    pauseEnd: 0.60,
    

    fadeInOthersMobileEnds: 0.30,
    fadeOutOthersMobileEnds: 0.60,
    fadeOutMainMobileStart: 0.75,
    fadeOutMainMobileEnd: 0.95,



  };







const PhotoMotion = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(
        scrollYProgress,
        [
          animationOrder.fadeInOthersEnd,
          animationOrder.mainMidFadeIn,
          animationOrder.mainFadeInEnds,
          animationOrder.pauseEnd
        ],
        [0, 0.5, 1, 1]
      );

    const scale = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInOthersEnd,
            animationOrder.mainMidFadeIn,
            animationOrder.mainFadeInEnds,
            animationOrder.pauseEnd
        ],
        [0.3, 0.6, 0.9, 0.9]
    );

    const x = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInOthersEnd,
            animationOrder.mainMidFadeIn,
            animationOrder.mainFadeInEnds,
            animationOrder.pauseEnd

        ],
        ["60%", "0%", "-25%", "-25%"]
    );

    const opacityOther = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midFadeInOthers,
            animationOrder.mainMidFadeIn,
            animationOrder.pauseEnd

        ],
        [0, 0.5, 1, 1]
    );
    const scaleOther = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midFadeInOthers,
            animationOrder.mainMidFadeIn,
            animationOrder.pauseEnd
            
        ],
        [0.3, 0.4, 0.8, 1]
    );
    const xOther = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midFadeInOthers,
            animationOrder.mainMidFadeIn,
            animationOrder.pauseEnd
        ],
        ["0%", "30%", "60%", "120%"]
    );


    const opacityMobile = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInOthersMobileEnds,
            animationOrder.fadeOutOthersMobileEnds,
            animationOrder.fadeOutMainMobileStart,
            animationOrder.fadeOutMainMobileEnd
        ],
        [0, 1, 1, 0]
      );

    const scaleMobile = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInOthersMobileEnds,
            animationOrder.fadeOutOthersMobileEnds,
            animationOrder.fadeOutMainMobileStart,
            animationOrder.fadeOutMainMobileEnd

        ],
        [0, 1, 1, 0]
    );

    const xMobile = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInOthersMobileEnds,
            animationOrder.fadeOutOthersMobileEnds,

        ],
        ["0%", "0%"]
    );

    const opacityOtherMobile = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInOthersMobileEnds,
            animationOrder.fadeOutOthersMobileEnds,

        ],
        [0, 1, 0]
    );
    const scaleOtherMobile = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInOthersMobileEnds,
            animationOrder.fadeOutOthersMobileEnds,
            
        ],
        [0.3, 1, 0]
    );
    const xOtherMobile = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInOthersMobileEnds,
            animationOrder.fadeOutOthersMobileEnds,
        ],
        ["0%", "0%", "0%"]
    );
      

  return (
    <section ref={targetRef} className='sm:mt-10' id='montage'>
        <AnimatedText text="Mes travaux Photoshop" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        {/* Desktop */}
        <div className='lg:hidden mx-3 relative h-[200vh] mt-[100px] mb-[60vh]'>
            <div className='sticky top-1/2 -translate-y-1/2 flex origin-center  justify-center'>
                <motion.div 
                style={{opacity,  "--scale": scale,  "--x": x,}}
                className='w-2/3 translate-x-centered-offset -translate-y-1/2 scale-[var(--scale)] absolute left-1/2 top-1/2 '>
                    <Image alt='Photo Montée' src={complete} className='w-full h-auto rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 100vw,
                        33vw"

                        // sizes="(max-width: 768px) 100vw,
                        // (max-width: 1200px) 100vw,
                        // 33vw"


                    /> 
                </motion.div>
                <motion.div 
                style={{
                    opacity: opacityOther,
                    "--scale": scaleOther,
                    "--x": xOther,
                }}
                className='space-y-3 w-3/3 translate-x-centered-offset absolute left-1/2 top-1/2 -translate-y-1/2 scale-[var(--scale)]'>
                    <Image alt='Photo hélicoptère' src={helico} className='w-full  rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 60vw,
                        70vw"
                    /> 
                    <Image alt='Photo Alex militaire' src={alex} className='w-full  rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 60vw,
                        70vw"
                    /> 
                    <Image alt='Photo Jeep Desert' src={jeep} className='w-full rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 60vw,
                        70vw"
                    /> 
                </motion.div>
                
            </div>

        </div>        
        
        {/* Mobile */}
        <div className='hidden lg:block mx-3 relative h-[800vh] mt-[40vh]'>
            <div className='sticky top-1/2 flex origin-center -translate-y-1/2 justify-center'>
                <motion.div 
                style={{opacity: opacityMobile,  "--scale": scaleMobile,  "--x": xMobile,}}
                className='w-full translate-x-centered-offset absolute left-1/2 top-1/2 -translate-y-1/2 scale-[var(--scale)]'>
                    <Image alt='Photo Montée' src={complete} className='w-full h-auto rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 100vw,
                        33vw"
                    /> 
                </motion.div>
                <motion.div 
                style={{
                    opacity: opacityOtherMobile,
                    "--scale": scaleOtherMobile,
                    "--x": xOtherMobile,
                }}
                className=' space-y-3 w-full translate-x-centered-offset absolute left-1/2 top-1/2  -translate-y-1/2 scale-[var(--scale)]'>
                    <div className='p-4'>
                        <Image alt='Photo hélicoptère' src={helico} className='w-full  rounded-2xl' 
                            priority
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 33vw,
                            100vw"
                        />
                    </div>

                    <div className='p-4'>
                        <Image alt='Photo Alex militaire' src={alex} className='w-full  rounded-2xl' 
                            priority
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 33vw,
                            100vw"
                        /> 
                    </div>

                    <div className='p-4'>
                        <Image alt='Photo Jeep Desert' src={jeep} className='w-full rounded-2xl' 
                            priority
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 33vw,
                            100vw"
                        /> 
                    </div>
                </motion.div>
            </div>
        </div>  

        <div className='flex justify-center items-center mb-[15vh]'>
           <p className='bg-light'>Ici le lien pour en voir d'autre / Je vais en faire un component</p>
        </div>
    </section>
  )
}

export default PhotoMotion