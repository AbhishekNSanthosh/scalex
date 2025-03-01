import React from 'react'
import Banner from './components/Banner'
import Header from '@widgets/Header'
import HeroText from './components/HeroText'
import Footer from '@widgets/Footer'

export default function LandingPageView() {
  return (
    <main>
      <Header/>
      <HeroText/>
      <Banner/>
      <Footer/>
    </main>
  )
}
