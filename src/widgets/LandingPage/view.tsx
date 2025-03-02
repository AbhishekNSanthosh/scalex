import React from 'react'
import Banner from './components/Banner'
import Header from '@widgets/Header'
import HeroText from './components/HeroText'
import Footer from '@widgets/Footer'
import OverviewContent from '@widgets/common/OverviewContent'
import TimelineWithSteps from '@widgets/common/TimelinewithSteps'
import AdvisoryBoardContent from '@widgets/common/AdvisoryBoardContent'
import GuidelinesContent from '@widgets/common/GuidelinesContent'

export default function LandingPageView() {
  return (
    <main>
      <Header/>
      <HeroText/>
      <OverviewContent/>
      <TimelineWithSteps/>
      <AdvisoryBoardContent/>
      <GuidelinesContent/>
      <Footer/>
    </main>
  )
}
