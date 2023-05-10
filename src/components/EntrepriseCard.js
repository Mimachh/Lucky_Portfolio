import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const EntrepriseCard = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border
        border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        '>
            {/* <div className='absolute top-1 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' /> */}
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.08}}
                transition={{duraction:0.2}}
                priority
                />
            </Link>
                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                    </Link>
                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target="_blank"
                        className='text-lg font-semibold underline dark:text-light md:text-base hover:text-primary dark:hover:text-primaryDark'
                        >Lien pour voir l'entreprise
                        </Link>
                        <Link href="/" className='w-8 dark:text-light md:w-6' target="_blank">Logo de l'entreprise</Link>
                    </div>
                </div>
        </article>
    )
}

export default EntrepriseCard