import React from 'react'
// import './landingPageStyle.css'
import Header from 'shared/header'
import Hero from 'components/heroSection'
import SubHeroSection from 'components/subHeroSection'
import InfoCard from 'components/infocard'
import OurExperience from 'components/ourexperience'
import FindYourSpace from 'components/findyourspace'
const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SubHeroSection />
      <InfoCard />
      <OurExperience />
      <FindYourSpace />
    </div>
  )
}

export default LandingPage