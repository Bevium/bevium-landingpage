import Head from 'next/head'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import CapabilitiesParallax from '@/components/sections/CapabilitiesParallax'
import Process from '@/components/sections/Process'
import Work from '@/components/sections/Work'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bevium: Engineering for AI &amp; Interactive 3D Software</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Technical partner for software with focus on AI integration and interactive/3D systems. Senior engineers integrated directly into your team."
        />
      </Head>

      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />
        <Process />
        <Team />
        <CapabilitiesParallax />
        <WhatWeBuild />
        <Testimonials />
        <Marquee />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
