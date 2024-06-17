import React from 'react';
import './ourAppStyle.css';
import app_image from 'assets/phone_image.png';
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import Button from 'shared/button';

const DownloadOurApp = () => {
  return (
    <div className='app_image_container flex'>
    <section className='app_image_text_section'>
      
      {/* right section */}
    <div>
        <h2 className='app_image_text1'>{'Download'} <br /> {'our App'}</h2>
    </div>

    {/* left section */}
    <div>
        <p className='app_image_text2'> With intuitive search features and a curated selection of 
            properties tailored to your preferences, 
            finding your dream home has never been easier. 
            Join thousands of satisfied users who have unlocked the key to 
            their ideal living space with just a tap.</p>
    </div>
    <div className="btn_container">
        <Button
        leftIcon={<IoLogoApple size={30}
        style={{
            borderRight: '2px solid grey',
            paddingRight: '7px'
        }}
        />}
            style={{
                width: "213px",
                height: "70px",
                borderRadius: "12px"
            }}
         btnName={
         <>
            <p className='btn_p'>Download on the</p> <br /> 
            <h4 className='btn_h4'>Apple Store</h4>
         </>
         } 
         />
        <Button
        leftIcon={<FaGooglePlay size={26} 
        style={{
            borderRight: '2px solid grey',
            paddingRight: '7px'
        }}
        />} 
        style={{
            width: "213px",
            height: "70px",
            borderRadius: "12px"
        }}
        btnName={
        <>
            <p className='get_p'>Get in on</p> <br />
            <h4 className='google_p'>Google Play</h4>
        </> 
        }
        />
      </div> 
</section>
<section className='app_image_image_section'>
    <img src={app_image} alt='info' className='phone_image' />
</section>

</div>



        // <section className='ourapp_container'>
        //   {/* text section */}
        //   <div className='ourapp_description'>
        //     <div className='ourapp_text'>
        //       <h2 className='ourapp_title'>
        //       {"Download our App"}
        //       </h2>
        //       <p className='ourapp_body'>
        //       With intuitive search features and a curated selection of properties tailored to your preferences, 
        //         finding your dream home has never been easier. Join thousands of satisfied users who have 
        //         unlocked the key to their ideal living space with just a tap.
        //       </p>
        //     </div>
        //     {/* button section */}
        //     <div className='ourbutton'>
        //       <div className='app_button1'> 
        //       <Button btnName={<><span className='span1'>Download on the</span>
        //         <br /><span className='span2'>App Store</span></>} 
        //         style={{
        //           // marginTop: "18rem",
        //           marginRight: "8rem"
                  
        //           // display:"flex"
        //         }}
        //         />
        //       </div>
        //       <div className='app_button2'>
        //       <Button btnName={<><span>Get in on</span>
        //         <br /><span>Google Play</span></>}
        //         style={{
        //           // marginTop: "15rem",
        //           // marginRight: "5rem",
        //           // paddingRight: "20px"
        //           // display:"flex"
        //         }}
        //         />
        //       </div>
        //     </div>
        //   </div>

        //   {/* image section */}
        //   <div className='ourapp_image'>
        //   <img src={app_image} alt="info-image" className='image' style={{ height: "500px"}}/>
        //   </div>

          
        // </section>
)
}

export default DownloadOurApp