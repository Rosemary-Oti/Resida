import React from 'react'
import './discoverStyle.css'
import Button from 'shared/button'
import { GoArrowRight } from "react-icons/go";



const DiscoverAplace = () => {
  return (

    <div className='discover_container flex'>
        
        <section className='discover_text_section '>
            <div>
                <p className='discover_text'>{"Discover a place you'll love to live"}</p>
            </div>
            
            <div className='discover_button flex' >
            <Button style={{
                 
                 fontSize: "16px",
                 color: "#1B2056",
                 fontWeight: "bold",
                 padding: "12px 34px",
                 borderRadius: "10px",
                 marginTop: "1rem",
                 backgroundColor: "#E7C873",
                 borderBottomLeftRadius: "12px",
                 borderTopLeftRadius: "12px",
                 borderTopRightRadius: "12px",
                 borderBottomRightRadius: "12px"
            }}
            btnName={"Download app"}
            rightIcon={<GoArrowRight color='#1F4B43' />}
            />
            </div>
        </section>
        
        </div>







    // <div className='discover_container'>
    //     <div className='discover_bg'>
    //     <img src={dis_img} alt="info" className='image' />
    //         <h2 className='discover_title'></h2>
    //         <Button />
    //     </div>
    // </div>
  )
}

export default DiscoverAplace