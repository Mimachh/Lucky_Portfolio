import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden md:right-6 md:left-auto md:top-0 md:bottom-auto
    md:absolute sm:right-0 z-20'>

        <div className='w-48 md:w-24 h-auto flex items-center justify-center
        relative'>
            <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>
            <Link href="mailto:karl.mullr@gmail.com"
            className='flex items-center text-center justify-center absolute left-1/2
            top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
            text-light shadow-md border border-solid border-dark
            w-28 h-28 rounded-full font-semibold p-12
            hover:bg-light hover:text-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
            hover:dark:border-light md:w-12 md:h-12 md:text-[8px] md:p-0'>Me contacter</Link>
        </div>

    </div>
  )
}

export default HireMe