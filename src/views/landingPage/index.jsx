import React from 'react'
// import './landingPageStyle.css'
import Header from 'shared/header'
import Hero from 'components/heroSection'
import SubHeroSection from 'components/subHeroSection'
const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SubHeroSection />
    </div>
  )
}

export default LandingPage