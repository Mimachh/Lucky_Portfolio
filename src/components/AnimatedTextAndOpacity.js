import React, { useRef } from 'react'
import {motion, useInView, useScroll, useTransform } from 'framer-motion'

const quote = {
    initial: {
        opacity:1,
    },
    animate: {
        opacity:1,
        transition: {
            delay:0.5,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity:0,
        y:50,
    },
    animate: {
        opacity:1,
        y:0,
        transition: {
            duration: 1
        }
    }
}

const animationOrder = {
    initial: 0,
    midAnimation: 0.4,
    endAnimation: 0.7
};

const AnimatedTextAndOpacity = ({text, className=""}) => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midAnimation,
            animationOrder.endAnimation
        ],
        [0, 1, 0]
      );


  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center 
    text-center overflow-hidden sm:py-0'>
        <motion.h1 className={`inline-block w-full text-dark font-bold
        capitalize text-8xl ${className} dark:text-light`}
        variants={quote}
        initial="initial"
        whileInView="animate"
        style={{opacity}}
        >
            {
                text.split(" ").map((word, index) =>
                <motion.span key={word+'-'+index} className='inline-block'
                variants={singleWord}
                >
                    {word}&nbsp;
                </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedTextAndOpacity