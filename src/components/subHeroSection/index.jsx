import React from 'react'
import './subHeroSectionStyle.css'
import Button from 'shared/button'
import { GoArrowRight } from "react-icons/go";

const SubHeroSection = () => {
  return (
    <section className='sub_hero_section_container'>
        <div className='sub_hero_text'>
            <h1>Resida nullifies the hassles of agents</h1>
            <p>Save properties, create alerts and keep track of the enquiries you send to agents</p>
        </div>
        <div className='sub_hero_cta'>
           <Button style={{
            width: "195px",
            color: '#1F4B43',
            padding: "7px 12px",
            backgroundColor: '#DBA94D'
            
           }} btnName={"Download our app"} 
           rightIcon={<GoArrowRight color='#1F4B43' size={25}/>}
           />
        </div>
    </section>
  )
}

export default SubHeroSection