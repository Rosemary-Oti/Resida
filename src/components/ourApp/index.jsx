import React from 'react'
import './ourAppStyle.css'
import app_image from 'assets/phone_image.png'
import Button from 'shared/button'

const DownloadOurApp = () => {
  return (
<div className='ourapp_container'>
             <div className='ourapp_image'>
                 <img src={app_image} alt="info-image" className='image' style={{ height: "500px"}}/>
             </div>
             <div className='ourapp_description'>
                 <div className='ourapp_text'>
                 <h2 className='ourapp_title'>{"Download our App"}</h2>
                <p className='ourapp_body'>
                With intuitive search features and a curated selection of properties tailored to your preferences, 
                finding your dream home has never been easier. Join thousands of satisfied users who have 
                unlocked the key to their ideal living space with just a tap.
                 </p>
                 </div>
                 <div className='span_btn'>
                    <span>
                      <Button btnName={"Download on the App Store"} />
                    </span>
                    <span>
                    <Button btnName={"Get in on Google Play"} />
                    </span>
                 </div>
             </div>
 </div>
  )
}

export default DownloadOurApp