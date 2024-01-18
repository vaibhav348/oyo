import React from 'react'
import Header1 from '../components/Header1.jsx'
import Header2 from '@/components/Header2.jsx'
import Header3 from '@/components/Header3.jsx'
import Image from 'next/image.js'
import Head from 'next/head.js'
import Header4 from '@/components/Header4.jsx'
import Footer from '@/components/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO : Indias bast Online Hotel Booking Site For Sanitized Stay</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className="mx-20">

      <div className="my-10">
        <Image src={"/banner1.avif"}  alt='banner1' width={200} height={200} className='h-50 w-full '/>

      </div>
      <div className="mb-14">
        <Image src={"/banner2.avif"}  alt='banner1' width={200} height={200} className='h-30 w-full '/>
        
      </div>
      <Header4/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home