import React from 'react'
// import './landingPageStyle.css'
import Header from 'shared/header'
import Hero from 'components/heroSection'
import SubHeroSection from 'components/subHeroSection'
import InfoCard from 'components/infocard'
const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SubHeroSection />
      <InfoCard />
    </div>
  )
}

export default LandingPage