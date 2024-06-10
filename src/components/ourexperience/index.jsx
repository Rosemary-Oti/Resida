import React from 'react'
import './ourExperienceStyle.css'
import our_exp1 from "assets/our-exp-img1.jpg"
import our_exp2 from "assets/our-exp-img2.jpg"
import our_exp3 from "assets/our-exp-img3.jpg"

const OurExperience = () => {
  return (
    <main className='our_exp_container'>
        <section className='boxes_container flex'>
          <div className='overflow flex'>
            <div className='box1'>
              <img src={our_exp1} alt="info" className='image' />
            </div>
            <div className='box2'><img src={our_exp2} alt="info" className='image' /></div>
            <div className='box3'><img src={our_exp3} alt="info" className='image' /></div>
            </div>
        </section>
        <section className='text flex'>
            {'Our Experience guarantees unmatched proficiency and excellence.'}
        </section>
    </main>
  )
}

export default OurExperience