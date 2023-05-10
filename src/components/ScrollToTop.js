import React, { useEffect } from 'react'
import Image from 'next/image'
import Cigar from '../../public/images/assets/cigar.png';
const { motion, useScroll, useAnimationControls } = require("framer-motion");


const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollToTopContainerVariants= {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

export default function scrollToTopButton() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.08) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            className="fixed bottom-0 right-0 p-5"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <Image src={Cigar} className='w-36'/>
        </motion.button>
    );
}
