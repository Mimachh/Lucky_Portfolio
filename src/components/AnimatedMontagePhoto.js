import React, { useRef } from 'react'
import Image from 'next/image'
import alex from "../../public/images/photomontage/1/alex.png"
import helico from "../../public/images/photomontage/1/helico.jpeg"
import jeep from "../../public/images/photomontage/1/jeep.jpg"
import complete from "../../public/images/photomontage/1/complete.png"


import { useScroll, useTransform, motion } from 'framer-motion'


const animationOrder = {
    initial: 0,
    fadeInImage1End: 0.10,
    fadeInImage2End: 0.15,
    fadeOuts: 0.30,
    fadeInImage3End: 0.45,
    fadeOut3: 0.60,
    fadeInCompleteEnd: 0.75,
    changeX: 0.82,
    allEnd: 0.88
}







const AnimatedMontagePhoto
 = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const opacity1 = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInImage1End,
            animationOrder.fadeInImage2End,
            animationOrder.fadeOuts,
        ],
        [0,1,1,0]
    );
    const scale = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInImage1End,
            animationOrder.fadeInImage2End,
            animationOrder.fadeOuts,
        ],
        [0.5,1,1,0.5]
    );




    const opacity2 = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInImage1End,
            animationOrder.fadeInImage2End,
            animationOrder.fadeOuts,
        ],
        [0,1,0]
    );
    const scale2 = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInImage1End,
            animationOrder.fadeInImage2End,
            animationOrder.fadeOuts,
        ],
        [0.5,1, 0.5]
    );

    const opacity3 = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeOuts,
            animationOrder.fadeInImage3End,
            animationOrder.fadeOut3,
        ],
        [0,1,0]
    );
    const scale3 = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeOuts,
            animationOrder.fadeInImage3End,
            animationOrder.fadeOut3,
        ],
        [0.5,1, 0.5]
    );

    const opacity4 = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeOut3,
            animationOrder.fadeInCompleteEnd,
            animationOrder.changeX,
            animationOrder.allEnd
        ],
        [0,1, 1,0]
    );
    const scale4 = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeOut3,
            animationOrder.fadeInCompleteEnd,
            animationOrder.changeX,
            animationOrder.allEnd
        ],
        [0.5,1.5, 1.5, 0]
    );


    const x = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeOut3,
            animationOrder.fadeInCompleteEnd,
            animationOrder.changeX,
            animationOrder.allEnd
        ],
        ["70%", "10%", "0%", "-70%"]
      );

  return (
    <section ref={targetRef} className='mt-[200px] sm:mt-10'>
        <div className='mx-3 relative h-[800vh]'>
            <div className='flex mb-3 sticky top-1/2 origin-center'>
                <motion.div style={{opacity: opacity1, '--scale': scale}} 
                className='w-1/2 right-1/2 absolute 
                -translate-y-1/2 scale-[var(--scale)]
                '>
                    <Image alt='Photo Helicoptère' src={helico} className='w-full h-auto rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    /> 
                </motion.div>

                <motion.div style={{opacity: opacity2, '--scale': scale2}} className='w-1/2 left-1/2 absolute 
                -translate-y-1/2 scale-[var(--scale)]'>
                    <Image alt='Karl Muller' src={jeep} className='w-full h-auto rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    /> 
                </motion.div>
            
            
            


            </div>

            <div className='mb-3 sticky top-1/2 origin-center'>
                <motion.div style={{opacity: opacity3, '--scale': scale3}}
                className='w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    scale-[var(--scale)]'>
                    <Image alt='Photo Alex' src={alex} className='w-full h-auto rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
                </motion.div>
            </div>

            {/* <div className='mb-3 sticky top-1/2 origin-center -translate-y-1/2 justify-center'>
                <motion.div style={{opacity: opacity4, '--scale': scale4, "--x": x}}
                className='translate-x-centered-offset absolute left-1/2 top-1/2 h-[75vh] max-h-[48vw] -translate-y-1/2 scale-[var(--scale)]'>
                    <Image alt='Photo Alex' src={complete} className='w-full h-auto rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
                </motion.div>
            </div> */}

            <div className='mb-3 sticky top-1/2 origin-center'>
                <motion.div style={{opacity: opacity4, '--scale': scale4, "--x": x}}
                className='w-1/2  absolute translate-x-centered-offset justify-center  top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 
                    scale-[var(--scale)]'>
                    <Image alt='Photo Alex' src={complete} className='w-full h-auto rounded-2xl' 
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

export default AnimatedMontagePhoto
