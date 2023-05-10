import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import TransitionEffect from '@/components/TransitionEffect'


const videos = () => {
  return (
    <>
        <Head>
            <title>
                Lucky Muller | Mes travaux de montage vidéo
            </title>
            <meta name='description' content='Je vous présente mes différents montages vidéos réalisés sur After Effect et DaVinci Resolve' />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Travaux Vidéos" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            </Layout>
        </main>
    </>
  )
}

export default videos