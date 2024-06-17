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
import FeaturedProperties from 'components/featuredproperties'
import house from 'assets/house.svg'
import DiscoverAplace from 'components/discoverAplace'
import OfficeSpace from 'components/officeSpace'
import DownloadOurApp from 'components/ourApp'
import FindHome from 'components/findHome'
import Footer from 'shared/footer'


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
      <FeaturedProperties />
      {/* DO YOU HAVE A PROPERTY */}
      <InfoCard 
      title="Do you have a property?"
      subtitle="Provide accommodation here in Lagos"
      body="Own a property in Lagos? Join our platform to effortlessly list your accommodations and connect with eager tenants seeking their perfect home in the vibrant city of Lagos."
      image={house}
      imageStyle={"info_comprehensive"}
      imageHeight={"info_comprehensive_houseeheight"}
      button={true}
      infoStyle={"info_guide"}
      circle ={true}
      circleStyletitle
      circleStyleSubtitle={"info_circle_subtitle"}
      reverse

      />
      <DiscoverAplace />

      {/* FIND HOME SECTION */}
      <FindHome />

      {/* NEED AN OFFICE SPACE */}
      <OfficeSpace />

      {/* our app */}
      <DownloadOurApp />
      
     {/* footer */}
      <Footer />
    </div>
  )
}

export default LandingPage