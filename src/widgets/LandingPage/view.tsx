import React from 'react'
import Banner from './components/Banner'
import Header from '@widgets/Header'
import HeroText from './components/HeroText'
import Footer from '@widgets/Footer'
import OverviewContent from '@widgets/common/OverviewContent'
import TimelineWithSteps from '@widgets/common/TimelinewithSteps'

export default function LandingPageView() {
  return (
    <main>
      <Header/>
      <HeroText/>
      <OverviewContent/>
      <TimelineWithSteps/>
      <Footer/>
    </main>
  )
}
