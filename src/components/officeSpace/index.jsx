import React from 'react'
import './officeSpaceStyle.css'
import office from 'assets/office_space.jpg'

const OfficeSpace = () => {
  return (
    <div className='office_container flex'>
        <section className='office_image_section '>
        <img src={office} alt="info" className='image' />
        </section>
        <section className='office_text_section'>
            <div>
                <h2>{"Need an office space?"}</h2>
            </div>
            <div>
                <p className='office_text'>Seeking office space in Lagos? Look no further! Our accommodations
        <br/> offer tailored solutions to meet your workspace needs, ensuring 
        <br/>productivity and comfort in the heart of Lagos</p>
            </div>
            
        </section>
        
        </div>
  )
}

export default OfficeSpace