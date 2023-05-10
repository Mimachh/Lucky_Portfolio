import React, { useRef } from 'react'
import Image from 'next/image'
import alex from "../../../public/images/photomontage/1/alex.png"
import helico from "../../../public/images/photomontage/1/helico.jpeg"
import jeep from "../../../public/images/photomontage/1/jeep.jpg"
import complete from "../../../public/images/photomontage/1/complete.png"


import { useScroll, useTransform, motion } from 'framer-motion'


const animationOrder = {
    initial: 0,
    fadeInFirstEnd: 0.15,
    SlideXFirstEnd: 0.35,
    slideXOtherStart: 0.50,
    fadeInSlideXOtherEnd: 0.65,
    fadeOutOtherEnd: 0.75,
    fadeOutFirstEnd: 0.85,
  };




const PhotoMotion = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    // const opacity = useTransform(
    //     scrollYProgress,
    //     [
    //       animationOrder.initial,
    //       animationOrder.fadeInFirstEnd,
    //       animationOrder.SlideXFirstEnd,
    //       animationOrder.fadeOutOtherEnd,
    //       animationOrder.fadeOutFirstEnd
    //     ],
    //     [0, 1, 1, 1, 0.3]
    //   );

    // const scale = useTransform(
    //     scrollYProgress,
    //     [
    //         animationOrder.initial,
    //         animationOrder.fadeInFirstEnd,
    //         animationOrder.SlideXFirstEnd,
    //         animationOrder.fadeOutOtherEnd,
    //         animationOrder.fadeOutFirstEnd
    //     ],
    //     [0.3, 1, 0.9, 0.9, 0]
    // );

    // const x = useTransform(
    //     scrollYProgress,
    //     [
    //         animationOrder.initial,
    //         animationOrder.fadeInFirstEnd,
    //         animationOrder.SlideXFirstEnd,
    //         animationOrder.fadeOutOtherEnd,
    //         animationOrder.fadeOutFirstEnd
    //     ],
    //     ["60%", "0%", "-10%", "-30%", "0%"]
    // );

    // const opacityOther = useTransform(
    //     scrollYProgress,
    //     [
    //         animationOrder.SlideXFirstEnd,
    //         animationOrder.slideXOtherStart,
    //         animationOrder.fadeInSlideXOtherEnd,
    //         animationOrder.fadeOutOtherEnd
    //     ],
    //     [0, 0.5, 1, 0.5]
    // );
    // const scaleOther = useTransform(
    //     scrollYProgress,
    //     [
    //         animationOrder.SlideXFirstEnd,
    //         animationOrder.slideXOtherStart,
    //         animationOrder.fadeInSlideXOtherEnd,
    //         animationOrder.fadeOutOtherEnd
    //     ],
    //     [0.3, 0.6, 0.8, 0]
    // );
    // const xOther = useTransform(
    //     scrollYProgress,
    //     [
    //         animationOrder.SlideXFirstEnd,
    //         animationOrder.slideXOtherStart,
    //         animationOrder.fadeInSlideXOtherEnd,
    //         animationOrder.fadeOutOtherEnd
    //     ],
    //     ["0%", "30%", "90%", "300%"]
    // );


        const opacity = useTransform(
        scrollYProgress,
        [
            animationOrder.SlideXFirstEnd,
            animationOrder.slideXOtherStart,
            animationOrder.fadeInSlideXOtherEnd,
            animationOrder.fadeOutOtherEnd
        ],
        [0, 1, 1, 1]
      );

    const scale = useTransform(
        scrollYProgress,
        [
            animationOrder.SlideXFirstEnd,
            animationOrder.slideXOtherStart,
            animationOrder.fadeInSlideXOtherEnd,
            animationOrder.fadeOutOtherEnd
        ],
        [0.3, 1, 0.9, 0.9]
    );

    const x = useTransform(
        scrollYProgress,
        [
            animationOrder.SlideXFirstEnd,
            animationOrder.slideXOtherStart,
            animationOrder.fadeInSlideXOtherEnd,
            animationOrder.fadeOutOtherEnd
        ],
        ["60%", "0%", "-10%", "-30%"]
    );

    const opacityOther = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInFirstEnd,
            animationOrder.SlideXFirstEnd,
            animationOrder.fadeOutOtherEnd,
        ],
        [0, 0.5, 1, 0.5]
    );
    const scaleOther = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInFirstEnd,
            animationOrder.SlideXFirstEnd,
            animationOrder.fadeOutOtherEnd,
        ],
        [0.3, 0.6, 0.8, 0]
    );
    const xOther = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInFirstEnd,
            animationOrder.SlideXFirstEnd,
            animationOrder.fadeOutOtherEnd,
        ],
        ["0%", "30%", "90%", "300%"]
    );

  return (
    <section ref={targetRef} className='mt-[200px] sm:mt-10'>
        <div className='sm:hidden mx-3 relative h-[800vh]'>
            <div className='sticky top-1/2 flex origin-center -translate-y-1/2 justify-center'>
                <motion.div 
                style={{opacity,  "--scale": scale,  "--x": x,}}
                className='w-2/3 translate-x-centered-offset absolute left-1/2 top-1/2 h-[75vh] max-h-[48vw] -translate-y-1/2 scale-[var(--scale)]'>
                    <Image alt='Photo Montée' src={complete} className='w-full h-auto rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    /> 
                </motion.div>
                <motion.div 
                style={{
                    opacity: opacityOther,
                    "--scale": scaleOther,
                    "--x": xOther,
                }}
                className='space-y-3 w-3/3  translate-x-centered-offset absolute left-1/2 top-1/2  -translate-y-1/2 scale-[var(--scale)]'>
                    <Image alt='Photo hélicoptère' src={helico} className='w-full  rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    /> 
                    <Image alt='Photo Alex militaire' src={alex} className='w-full  rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    /> 
                    <Image alt='Photo Jeep Desert' src={jeep} className='w-full rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    /> 
                </motion.div>
            </div>
        </div>        

    </section>
  )
}

export default PhotoMotion