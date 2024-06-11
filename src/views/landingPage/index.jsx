import React from 'react'
// import './landingPageStyle.css'
import Header from 'shared/header'
import Hero from 'components/heroSection'
import SubHeroSection from 'components/subHeroSection'
import InfoCard from 'components/infocard'
import OurExperience from 'components/ourexperience'
import FindYourSpace from 'components/findyourspace'
import info_image from 'assets/resida-info.svg'
import guidemap from 'assets/guidemap.svg'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SubHeroSection />
      {/* InfoCard section */}
      <InfoCard 
      title="Resida is Not Just an App" 
      subtitle="We are an ecosystem with you at the center" 
      body="Resida aims to bridge the gap between potential tenants and available properties. This app is not just a tool; it's a solution for individuals and families who are navigating the challenging terrain of apartment hunting in a new or familiar city."
      image={info_image}
      imageStyle={"info_image"}
      imageHeight={"image"}
      infoStyle={"info"}
      />
      <OurExperience />
      <FindYourSpace />
      <InfoCard 
      title="Comprehensive"
      subtitle="Neighborhood Guides"
      body="The 'Neighborhood Guides' in Resida are like your friendly local experts, giving you the inside scoop on the vibe, hotspots, and quirks of each area so you can find your perfect match effortlessly! 🏡✨"
      image={guidemap}
      imageStyle={"info_comprehensive"}
      imageHeight={"info_comprehensive_imageheight"}
      button={true}
      infoStyle={"info_guide"}
      />
    </div>
  )
}

export default LandingPage