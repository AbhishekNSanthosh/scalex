import AdvisoryBoardContent from '@widgets/common/AdvisoryBoardContent'
import Footer from '@widgets/Footer'
import Header from '@widgets/Header'
import React from 'react'

export default function AdvisoryBoard() {
  return (
    <main>
      <Header/>
      <div className="pt-[30px]">
      <AdvisoryBoardContent/>
      </div>
      <Footer/>
    </main>
  )
}
