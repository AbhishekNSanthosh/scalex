import OverviewContent from '@widgets/common/OverviewContent'
import Footer from '@widgets/Footer'
import Header from '@widgets/Header'
import React from 'react'

export default function Overview() {
  return (
   <main>
    <Header/>
    <div className="pt-[50px] lg:pt-0">
    <OverviewContent/>
    </div>
    <Footer/>
   </main>
  )
}
